window.onload=function(){
	
	//上传文件,提交到/MyNetdisk/upload
	var btn_upload=document.myform.myfile;
	btn_upload.onchange=function(){
		document.myform.submit();
	}
	
	//注销方法
	var logout=document.getElementById("logout");
	logout.onclick=function(){
		window.location.href="/MyNetdisk/sessionServlet";
	};
	
	//使iframe自适应高度
	var ifm= document.getElementById("myiframe");
	ifm.height=document.documentElement.clientHeight;
	
	//下载操作
	var download=document.getElementById("download");
	download.onclick=function(){
		//获取localstorage
		var fileAbsolutePath=window.localStorage.getItem('fileAbsolutePath');
		//对文件磁盘路径名进行编码
		fileAbsolutePath=encodeURIComponent(fileAbsolutePath);
		//请求下载
		window.location.href="/MyNetdisk/DownloadServlet?fileAbsolutePath="+fileAbsolutePath;
	};
	
	
}