class FormValidation {
  public formClass: string;
  public validationGroupClass: string = "js-vali";
  public requiredFieldClass: string = "js-require";
  public errorWrapperClass: string = "js-vali-err";
  public errorElementClass: string = "js-vali-err-elm";
  public validationFlagClass: string = "js-vali-flag";
  public emptyFieldClass: string = "js-vali-empty";
  public emailFieldClass: string = "js-vali-email";
  public phoneFieldClass: string = "js-vali-tel";
  public submitBtnClass: string = "js-submit-btn";
  public checkboxFieldClass: string = "js-vali-checkbox";

  constructor(formType: string) {
    this.formClass = `js-form-${formType}`;
  }

  // private addValidationFlag(element: HTMLElement) {
  //   element.classList.add(this.validationFlagClass);
  // }

  validateEmpty(isSubmit: boolean = false) {
    const self = this;
    const errorMessage = `<span class="${self.errorElementClass}">必須項目です。</span>`;
    // 送信時の処理
    if(isSubmit) {
      // 全ての空文字チェックする要素の結果
      let result: boolean[] = [];
      document.querySelectorAll(`.${self.formClass} .${self.emptyFieldClass}`).forEach(elm => {
        const parent = elm.closest(`.${self.formClass} .${self.validationGroupClass}`) as HTMLElement;
        const errWrap = parent.querySelector(`.${self.formClass} .${self.errorWrapperClass}`);
        if(elm.classList.contains(self.requiredFieldClass)) {
          const inputs = elm.querySelectorAll('input, select, textarea');
          // 各空文字チェックする要素の結果
          let status: boolean[] = [];
          inputs.forEach(input => {
            const value = (input as HTMLInputElement).value;
            value ? status.push(true) : status.push(false);
          });
          if(status.includes(false)) {
            errWrap?.insertAdjacentHTML("beforeend", errorMessage);
            result.push(false);
          } else {
            result.push(true);
          }
        }
      });
      //全ての空文字のいずれかの結果に、falseが含まれていたらfalseを返す
      return result.includes(false) ? false : true;
    } else {
      document.querySelectorAll(`.${self.formClass} .${self.emptyFieldClass}`).forEach(elm => {
        if (elm.classList.contains(self.requiredFieldClass)) {
          const inputs = elm.querySelectorAll('input, select, textarea');
          inputs.forEach(input => {
            const parent = input.closest(`.${self.formClass} .${self.validationGroupClass}`) as HTMLElement;
            const errWrap = parent.querySelector(`.${self.formClass} .${self.errorWrapperClass}`);
            input.addEventListener('blur', function() {
              errWrap?.querySelector(`.${self.formClass} .${self.errorElementClass}`)?.remove();
              const value = (input as HTMLInputElement).value;
              // 合格
              if(value) {
                errWrap?.querySelector(`.${self.formClass} .${self.errorElementClass}`)?.remove();
              // 不合格
              } else {
                errWrap?.insertAdjacentHTML("beforeend", errorMessage);
              }
            });
          });
        }
      });
    }
  }

  validateTel(isSubmit: boolean = false) {
    const self = this;
    const errorMessage = `<span class="${self.errorElementClass}">電話番号を入力してください</span>`;
    const phonePattern = /^(0{1}\d{9,10})$/;
    const parent = document.querySelector(`.${self.formClass} .${self.phoneFieldClass}`) as HTMLElement;
    const errElm = parent.querySelector(`.${self.errorWrapperClass}`);
    const inputElm = parent.querySelector("input") as HTMLInputElement;
    // 送信時の処理
    if(isSubmit) {
      let isValid = true;
      if(parent && parent.classList.contains(this.requiredFieldClass)) {
        const inputValue = inputElm.value;
        if (!phonePattern.test(inputValue)) {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
          isValid = false;
        }
      }
      return isValid;
    // blur時の処理
    } else {
      inputElm.addEventListener('blur', function() {
        errElm?.querySelector(`.${self.errorElementClass}`)?.remove();
        const value = inputElm.value;
        // 合格
        if(phonePattern.test(value)) {
          errElm?.querySelector(`.${self.errorElementClass}`)?.remove();
        // 不合格
        } else {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
        }
      });
    }
  }

  validateEmail(isSubmit: boolean = false) {
    const self = this;
    const errorMessage = `<span class="${this.errorElementClass}">「メールアドレス」の形式が正しくありません。(例) sample@sample.jp</span>`;
    const emailPattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const parent = document.querySelector(`.${self.formClass} .${self.emailFieldClass}`) as HTMLElement;
    const errElm = parent.querySelector(`.${self.errorWrapperClass}`);
    const inputElm = parent.querySelector("input") as HTMLInputElement;
    // 送信時の処理
    if(isSubmit) {
      let isValid = true;
      if(parent && parent.classList.contains(this.requiredFieldClass)) {
        const inputValue = inputElm.value;
        if (!emailPattern.test(inputValue)) {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
          isValid = false;
        }
      }
      return isValid;
    // blur時の処理
    } else {
      inputElm.addEventListener('blur', function() {
        errElm?.querySelector(`.${self.errorElementClass}`)?.remove();
        const value = inputElm.value;
        // 合格
        if(emailPattern.test(value)) {
          errElm?.querySelector(`.${self.errorElementClass}`)?.remove();
        // 不合格
        } else {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
        }
      });
    }
  }

  validateCheckbox(isSubmit: boolean = false) {
    const self = this;
    const errorMessage = `<span class="${this.errorElementClass}">必須項目です。</span>`;
    const parent = document.querySelector(`.${self.formClass} .${self.checkboxFieldClass}`) as HTMLElement;
    const errElm = parent.querySelector(`.${self.errorWrapperClass}`);
    const checkboxElm = parent.querySelector("input[type='checkbox']") as HTMLInputElement;
    // 送信時の処理
    if (isSubmit) {
      let isValid = true;
      if (parent && parent.classList.contains(this.requiredFieldClass)) {
        if (!checkboxElm.checked) {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
          isValid = false;
        }
      }
      return isValid;
    // 変更があった時
    } else {
      checkboxElm.addEventListener('change', function() {
        errElm?.querySelector(`.${self.errorElementClass}`)?.remove();
        // チェックされていない場合
        if (!checkboxElm.checked) {
          errElm?.insertAdjacentHTML("beforeend", errorMessage);
        }
      });
    }
  }

  scrollErrPos() {
    const self = this;
    let errElmPos = 0;
    const errElm = document.querySelector(`.${self.errorElementClass}`);
    if(errElm) {
      let adjust = 10;
      let groupElm = errElm.closest(`.${self.validationGroupClass}`) as HTMLElement;
      errElmPos = groupElm?.offsetTop - adjust;
      setTimeout(() => {
        window.scrollTo({top:errElmPos, behavior: 'smooth'});
      }, 100);
    }
  }

}

export default FormValidation;
