document.getElementById("goInstallPageBtn").onclick = function() {
  const installerUrl = "https://github.com/PROroblox1212/tool/releases/download/1.0/script.exe";
  
  const a = document.createElement("a");
  a.href = installerUrl;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  alert("Le téléchargement de l'installateur va commencer !");
}
