const LoadingBar = () => {
  return (
    <div className="flex z-0 items-center text-center justify-center rounded-lg bg-transparent dark:border-gray-700">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

// Full page loading overlay component
export const FullPageLoading = () => {
  return (
    <div className="fixed inset-0 z-[9998] bg-gradient-to-br from-white/95 via-white/90 to-violet-50/80 dark:from-gray-900/95 dark:via-gray-900/90 dark:to-violet-900/20 backdrop-blur-md flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Enhanced Spinner Animation */}
        <div className="relative">
          {/* Main rotating spinner ring */}
          <div
            className="w-24 h-24 rounded-full border-4 border-transparent bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-border"
            style={{
              animation: 'loading-spin 1s linear infinite',
              transform: 'translateZ(0)'
            }}
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              {/* Inner spinning dots */}
              <div className="relative w-16 h-16">
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-violet-500 rounded-full"
                  style={{
                    animation: 'loading-spin-reverse 1.5s linear infinite',
                    transform: 'translateZ(0)'
                  }}
                ></div>
                <div
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"
                  style={{
                    animation: 'loading-spin-reverse 1.5s linear infinite',
                    animationDelay: '0.25s',
                    transform: 'translateZ(0)'
                  }}
                ></div>
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"
                  style={{
                    animation: 'loading-spin-reverse 1.5s linear infinite',
                    animationDelay: '0.5s',
                    transform: 'translateZ(0)'
                  }}
                ></div>
                <div
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 bg-violet-600 rounded-full"
                  style={{
                    animation: 'loading-spin-reverse 1.5s linear infinite',
                    animationDelay: '0.75s',
                    transform: 'translateZ(0)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Outer pulsing rings with different speeds */}
          <div
            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-violet-400/30"
            style={{
              animation: 'loading-spin-ping 2s linear infinite',
              transform: 'translateZ(0)'
            }}
          ></div>

          <div
            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-purple-400/20"
            style={{
              animation: 'loading-spin-reverse-ping 2.5s linear infinite',
              transform: 'translateZ(0)'
            }}
          ></div>

          <div
            className="absolute inset-0 w-24 h-24 rounded-full border-2 border-blue-400/15"
            style={{
              animation: 'loading-spin-ping 3s linear infinite',
              transform: 'translateZ(0)'
            }}
          ></div>

          {/* Floating spinner dots */}
          <div
            className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
            style={{
              animation: 'bounce 1s infinite',
              transform: 'translateZ(0)'
            }}
          ></div>
          <div
            className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full"
            style={{
              animation: 'bounce 1s infinite',
              animationDelay: '0.3s',
              transform: 'translateZ(0)'
            }}
          ></div>
          <div
            className="absolute -top-3 -left-3 w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full"
            style={{
              animation: 'bounce 1s infinite',
              animationDelay: '0.6s',
              transform: 'translateZ(0)'
            }}
          ></div>
          <div
            className="absolute -bottom-3 -right-3 w-3 h-3 bg-gradient-to-r from-violet-600 to-purple-500 rounded-full"
            style={{
              animation: 'bounce 1s infinite',
              animationDelay: '0.9s',
              transform: 'translateZ(0)'
            }}
          ></div>
        </div>

        {/* Modern Loading Text with Spinner Effect */}
        <div className="text-center">
          <h3
            className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }}
          >
            Loading
          </h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            <div
              className="w-2 h-2 bg-violet-500 rounded-full"
              style={{
                animation: 'bounce 1s infinite',
                transform: 'translateZ(0)'
              }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-500 rounded-full"
              style={{
                animation: 'bounce 1s infinite',
                animationDelay: '0.1s',
                transform: 'translateZ(0)'
              }}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full"
              style={{
                animation: 'bounce 1s infinite',
                animationDelay: '0.2s',
                transform: 'translateZ(0)'
              }}
            ></div>
            <div
              className="w-2 h-2 bg-violet-600 rounded-full"
              style={{
                animation: 'bounce 1s infinite',
                animationDelay: '0.3s',
                transform: 'translateZ(0)'
              }}
            ></div>
          </div>
        </div>

        {/* Enhanced Progress Bar with Spinner Effect */}
        <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-full"
            style={{
              animation: 'progress 2s ease-in-out infinite'
            }}
          ></div>
          {/* Spinning progress indicator */}
          <div
            className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
            style={{
              animation: 'loading-spin-reverse 1.5s linear infinite',
              transform: 'translateZ(0)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingBar;
