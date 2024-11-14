import FormValidation from "./formValidation.js";

export const contactValidaion = () => {
  const v = new FormValidation("contact");
  v.validateEmpty();
  v.validateTel();
  v.validateEmail();
  v.validateCheckbox();

  const submitBtn = document.querySelector(`.${v.formClass} .${v.submitBtnClass}`) as HTMLButtonElement;
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const errElm = document.querySelectorAll(`.${v.formClass} .${v.errorElementClass}`);
      errElm.forEach((errorElement) => errorElement.remove());
      let isFormValid: boolean = true;
      // 空文字のチェック
      if (document.querySelector(`.${v.formClass} .${v.emptyFieldClass}`)?.classList.contains(v.requiredFieldClass)) {
        isFormValid = v.validateEmpty(true) ?? false;
      }
      // 電話番号のチェック
      if (document.querySelector(`.${v.formClass} .${v.phoneFieldClass}`)?.classList.contains(v.requiredFieldClass)) {
        isFormValid = v.validateTel(true) ?? false;
      }
      // メールアドレスのチェック
      if (document.querySelector(`.${v.formClass} .${v.emailFieldClass}`)?.classList.contains(v.requiredFieldClass)) {
        isFormValid = v.validateEmail(true) ?? false;
      }
      // チェックボックスのチェック
      if (document.querySelector(`.${v.formClass} .${v.checkboxFieldClass}`)?.classList.contains(v.requiredFieldClass)) {
        isFormValid = v.validateCheckbox(true) ?? false;
      }
      if (isFormValid) {
        console.log('ok');
        // const form = document.querySelector(`.${v.formClass}`) as HTMLFormElement;
        // form.submit();
        // submitBtn.disabled = true;
        // submitBtn.style.cursor = "not-allowed";
      } else {
        v.scrollErrPos();
        console.log('err');
        // v.scrollErrPos();
      }
  });
  }
}
