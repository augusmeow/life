import{_ as a,c as o,a3 as r,o as t}from"./chunks/framework.DDs3IadZ.js";const x=JSON.parse('{"title":"VirtualBox该何去何从","description":"","frontmatter":{"date":"2022-04-06T09:09:09.000Z"},"headers":[],"relativePath":"code/os/windows/VirtualBox.md","filePath":"code/os/windows/VirtualBox.md","lastUpdated":1700641647000}'),l={name:"code/os/windows/VirtualBox.md"};function i(d,e,s,c,u,n){return t(),o("div",null,e[0]||(e[0]=[r('<h1 id="virtualbox该何去何从" tabindex="-1">VirtualBox该何去何从 <a class="header-anchor" href="#virtualbox该何去何从" aria-label="Permalink to &quot;VirtualBox该何去何从&quot;">​</a></h1><h2 id="重装系统后如何重新启用virtual-box" tabindex="-1">重装系统后如何重新启用Virtual Box <a class="header-anchor" href="#重装系统后如何重新启用virtual-box" aria-label="Permalink to &quot;重装系统后如何重新启用Virtual Box&quot;">​</a></h2><h3 id="避免后面出现如下报错信息-请先检查vboxdrv服务是否正常运行" tabindex="-1">避免后面出现如下报错信息，请先检查<code>vboxdrv</code>服务是否正常运行 <a class="header-anchor" href="#避免后面出现如下报错信息-请先检查vboxdrv服务是否正常运行" aria-label="Permalink to &quot;避免后面出现如下报错信息，请先检查`vboxdrv`服务是否正常运行&quot;">​</a></h3><blockquote><p>NtCreateFile(\\Device\\VBoxDrvStub) failed: 0xc000000034 STATUS_OBJECT_NAME_NOT_FOUND (0 retries) (rc=-101)<br> Make sure the kernel module has been loaded successfully.</p></blockquote><p>vboxdrv服务</p><ul><li>cmd键入<code>sc.exe query vboxdrv</code>检测其运行状态</li><li>若未启动，键入<code>sc start vboxdrv</code>进行启动</li><li>启动失败则需要重新安装，进入安装路径<code>C:\\Program Files\\Oracle\\VirtualBox\\drivers\\vboxdrv</code>, 右击VBoxDrv.inf，选安装，然后重启。</li></ul><h3 id="下面我们开始恢复" tabindex="-1">下面我们开始恢复 <a class="header-anchor" href="#下面我们开始恢复" aria-label="Permalink to &quot;下面我们开始恢复&quot;">​</a></h3><p>重现你当时安装所选的配置，在到虚拟硬盘的步骤时，选择使用现有文件，找到你之前的vdi文件，点击创建，大功告成</p><p><a href="https://sm.ms/image/agfDFEBjGoNMdu7" target="_blank" rel="noreferrer"><img src="https://i.loli.net/2021/10/11/agfDFEBjGoNMdu7.png" alt="1"></a></p><p>一些坑...</p><ul><li>一定要把网络设置为桥接网卡</li></ul><p><a href="https://sm.ms/image/OYZgpsw4CBJhVju" target="_blank" rel="noreferrer"><img src="https://i.loli.net/2021/10/11/OYZgpsw4CBJhVju.png" alt="1"></a></p><ul><li>检查linux网卡配置 <ul><li><code>vim /etc/sysconfig/network-scripts/ifcfg-enp0s3</code></li><li><code>vim /etc/resolv.conf</code></li></ul></li></ul>',13)]))}const h=a(l,[["render",i]]);export{x as __pageData,h as default};
