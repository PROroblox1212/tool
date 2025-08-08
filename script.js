document.getElementById("goInstallPageBtn").onclick = function() {
  const installerUrl = "https://github.com/PROroblox1212/tool/releases/download/v1.0.0/script.rar";
  
  const a = document.createElement("a");
  a.href = installerUrl;
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  alert("Le téléchargement de l'installateur va commencer !");
}
