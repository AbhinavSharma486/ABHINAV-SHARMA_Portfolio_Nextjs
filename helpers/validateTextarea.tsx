import Notification from "../utils/Notification";

export default function validateTextarea(textareaId: string, minLength: number, maxLength: number): boolean {
  const notyf = new Notification(3000);
  const textarea = document.getElementById(textareaId) as HTMLTextAreaElement | null;

  if (!textarea) {
    notyf.error('Textarea element not found');
    return false;
  }

  const textareaValue = textarea.value.trim();
  const textareaLength = textareaValue.length;

  if (textareaLength < minLength) {
    notyf.error(`Your message should be more than ${minLength} characters`);
    return false;
  } else if (textareaLength > maxLength) {
    notyf.error(`Please enter no more than ${maxLength} characters`);
    return false;
  } else {
    return true;
  }
}
