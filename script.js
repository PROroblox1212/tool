document.getElementById("goInstallPageBtn").onclick = function() {
  // URL of your installer
  const installerUrl = "";
  
  // Create a temporary link and trigger download
  const a = document.createElement("a");
  a.href = installerUrl;
  a.download = ""; // triggers download instead of navigation
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  alert("Le téléchargement de l'installateur va commencer !");
}
