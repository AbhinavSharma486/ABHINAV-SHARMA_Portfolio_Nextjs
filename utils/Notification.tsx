class Notification {
  private duration: number;
  private container: HTMLElement | null = null;

  constructor(duration = 4000) {
    this.duration = duration;
    this.createContainer();
  }

  private createContainer() {
    if (typeof window === "undefined") return;

    // Remove existing container if any
    const existing = document.getElementById('custom-notification-container');
    if (existing) {
      existing.remove();
    }

    // Create new container
    this.container = document.createElement('div');
    this.container.id = 'custom-notification-container';
    this.container.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 999999;
      width: auto;
      max-width: calc(100vw - 32px);
      pointer-events: none;
    `;

    document.body.appendChild(this.container);
  }

  private createToast(message: string, type: 'success' | 'error') {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: ${type === 'success' ? '#4CAF50' : '#f44336'};
      color: white;
      padding: ${window.innerWidth <= 768 ? '14px 50px 14px 18px' : '16px 50px 16px 20px'};
      border-radius: 12px;
      margin-bottom: 10px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      font-size: 15px;
      font-weight: 500;
      line-height: 1.4;
      position: relative;
      min-height: ${window.innerWidth <= 768 ? '56px' : '60px'};
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      max-width: ${window.innerWidth <= 768 ? '320px' : '350px'};
      min-width: ${window.innerWidth <= 768 ? '260px' : '280px'};
      pointer-events: auto;
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    `;

    // Create message text
    const messageElement = document.createElement('span');
    messageElement.textContent = message;
    messageElement.style.cssText = `
      color: white;
      font-size: 15px;
      font-weight: 500;
      line-height: 1.4;
      width: 100%;
      display: block;
    `;

    // Create dismiss button
    const dismissButton = document.createElement('button');
    dismissButton.innerHTML = '×';

    // Check if mobile for different positioning
    const isMobile = window.innerWidth <= 768;

    dismissButton.style.cssText = `
      position: absolute;
      right: ${isMobile ? '10px' : '15px'};
      top: ${isMobile ? '10px' : '50%'};
      transform: ${isMobile ? 'none' : 'translateY(-50%)'};
      width: ${isMobile ? '32px' : '30px'};
      height: ${isMobile ? '32px' : '30px'};
      font-size: ${isMobile ? '22px' : '20px'};
      font-weight: bold;
      border: none;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    `;

    // Dismiss button hover/active effects
    dismissButton.addEventListener('mouseenter', () => {
      dismissButton.style.background = 'rgba(255, 255, 255, 0.4)';
      const isMobile = window.innerWidth <= 768;
      dismissButton.style.transform = isMobile ? 'scale(1.1)' : 'translateY(-50%) scale(1.1)';
    });

    dismissButton.addEventListener('mouseleave', () => {
      dismissButton.style.background = 'rgba(255, 255, 255, 0.25)';
      const isMobile = window.innerWidth <= 768;
      dismissButton.style.transform = isMobile ? 'scale(1)' : 'translateY(-50%) scale(1)';
    });

    dismissButton.addEventListener('touchstart', () => {
      dismissButton.style.background = 'rgba(255, 255, 255, 0.4)';
      const isMobile = window.innerWidth <= 768;
      dismissButton.style.transform = isMobile ? 'scale(1.15)' : 'translateY(-50%) scale(1.15)';
    });

    dismissButton.addEventListener('touchend', () => {
      dismissButton.style.background = 'rgba(255, 255, 255, 0.25)';
      const isMobile = window.innerWidth <= 768;
      dismissButton.style.transform = isMobile ? 'scale(1)' : 'translateY(-50%) scale(1)';
    });

    // Dismiss functionality
    const dismissToast = () => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-20px) scale(0.9)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    };

    dismissButton.addEventListener('click', dismissToast);
    dismissButton.addEventListener('touchstart', (e) => {
      e.preventDefault();
      dismissToast();
    });

    // Append elements
    toast.appendChild(messageElement);
    toast.appendChild(dismissButton);
    this.container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0) scale(1)';
    });

    // Auto dismiss
    const autoDismissTimer = setTimeout(dismissToast, this.duration);

    // Clear timer if manually dismissed
    dismissButton.addEventListener('click', () => clearTimeout(autoDismissTimer));

    return toast;
  }

  success(message = "SUCCESS") {
    this.createToast(message, 'success');
  }

  error(message = "ERROR") {
    this.createToast(message, 'error');
  }

  dismissAll() {
    if (!this.container) return;

    const toasts = this.container.children;
    Array.from(toasts).forEach(toast => {
      const htmlToast = toast as HTMLElement;
      htmlToast.style.opacity = '0';
      htmlToast.style.transform = 'translateY(-20px) scale(0.9)';
      setTimeout(() => {
        if (htmlToast.parentNode) {
          htmlToast.parentNode.removeChild(htmlToast);
        }
      }, 300);
    });
  }
}

export default Notification;