(function () {
    if (window.CarePilotWidgetLoaded) return;
    window.CarePilotWidgetLoaded = true;
  
    const scriptTag = document.currentScript;
    const widgetSrc = new URL(scriptTag.src);
  
    // Extract URL parameters
    const community = widgetSrc.searchParams.get("community") || "default";
    const theme = widgetSrc.searchParams.get("theme") || "light";
    const source = widgetSrc.searchParams.get("source") || "website";
    const color = widgetSrc.searchParams.get("color") || null;
  
  
    const DOMAIN = "http://localhost:5173"; // CHANGE TO PROD LATER
  
    // Add a global function for opening the modal
    window.CarePilot = {
      open: function () {
        document.getElementById("carepilot-modal").style.display = "flex";
      },
      close: function () {
        document.getElementById("carepilot-modal").style.display = "none";
      },
    };
  
    // Create modal container
    const modal = document.createElement("div");
    modal.id = "carepilot-modal";
    modal.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.55);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      padding: 20px;
    `;
  
    // Modal content box
    const box = document.createElement("div");
    box.style.cssText = `
      background: white;
      width: 100%;
      max-width: 900px;
      height: 90%;
      border-radius: 16px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    `;
  
    // Close button
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = "×";
    closeBtn.style.cssText = `
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 28px;
      cursor: pointer;
      z-index: 10;
      color: #444;
    `;
    closeBtn.onclick = () => window.CarePilot.close();
  
    // Iframe
    const iframe = document.createElement("iframe");
    iframe.src =
    DOMAIN +
    `/embed?community=${community}&theme=${theme}&source=${source}` +
    (color ? `&color=${color}` : "");
      iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: 0;
    `;
    iframe.allow = "clipboard-write";
  
    // Append composition
    box.appendChild(closeBtn);
    box.appendChild(iframe);
    modal.appendChild(box);
    document.body.appendChild(modal);
  
    // Auto-resize
    window.addEventListener("message", (event) => {
      if (event.data?.carepilotHeight) {
        iframe.style.height = event.data.carepilotHeight + "px";
      }
    });
  
    // Add a floating button
    const button = document.createElement("button");
    button.innerText = "Start Assessment";
    button.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0d9488;
      color: white;
      border: none;
      padding: 14px 22px;
      font-size: 16px;
      border-radius: 12px;
      cursor: pointer;
      z-index: 999999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    button.onclick = () => window.CarePilot.open();
  
    document.body.appendChild(button);
  })();
  