// src/main.ts
import './init.ts';
import './my-app';
import './components/header';
import './components/navigation';
import './styles/global.css';
import './styles/mobile-styles';

// Detect Safari on iOS (and not in standalone mode)
if (
  /iPad|iPhone|iPod/.test(navigator.userAgent) && // Check for iOS device
  !(window.navigator as any).standalone // Check if it's NOT in standalone mode
) {
  document.body.classList.add('safari-ios.safari-ios-message');
}

function detectBrowser(): string {
  const userAgent = navigator.userAgent;

  if (
    /firefox/i.test(userAgent)
  ) return "Firefox";
  if (
    /edg/i.test(userAgent)
  ) return "Edge";
  if (
    /chrome/i.test(userAgent) && !/edg/i.test(userAgent)
  ) return "Chrome";
  if (
    /safari/i.test(userAgent) && !/chrome/i.test(userAgent)
  ) return "Safari";
  if (
    /opr|opera/i.test(userAgent)
  ) return "Opera";

  return "Unknown";
}

console.log(`User is using: ${detectBrowser()}`);
