<template><div><ul>
<li>
<p>本文档为红包多多产品使用说明文档，不适用于其他软件；</p>
</li>
<li>
<p>软件适用微信：</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 普通微信</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 企业微信</label></li>
</ul>
</li>
<li>
<p>软件有 3 个版本，在部分地方的使用上，使用有区别，请点击自己使用的版本选项查看，如下</p>
</li>
</ul>
<Tabs id="29" :data='[{"id":"公众版"},{"id":"独立商户版"},{"id":"分销商版"}]'>
<template #title0="{ value, isActive }">公众版</template>
<template #title1="{ value, isActive }">独立商户版</template>
<template #title2="{ value, isActive }">分销商版</template>
<template #tab0="{ value, isActive }">
<p>这里是<Badge text="公众版" type="info" vertical="middle" />的</p>
</template>
<template #tab1="{ value, isActive }">
<p>这里是<Badge text="独立商户版" type="tip" vertical="middle" />的</p>
</template>
<template #tab2="{ value, isActive }">
<p>这里是<Badge text="分销商版" type="fx" vertical="middle" />的</p>
</template>
</Tabs>
<ul>
<li>售后问题，部分需要用到远程处理的，请在电脑上下载一份<a href="https://www.faqun.cn/todesk" target="_blank" rel="noopener noreferrer">远程工具<ExternalLinkIcon/></a><br>
<br/></li>
</ul>
<div style="text-align:center">
<p><strong>文档目录</strong></p>
</div>
<ul>
<li><RouterLink to="/hbdd/az.html">1️⃣ 红包多多安装</RouterLink></li>
<li><RouterLink to="/hbdd/cz.html">2️⃣ 员工授权充值</RouterLink></li>
<li><RouterLink to="/hbdd/ff.html">3️⃣ 红包批量发放</RouterLink></li>
<li><RouterLink to="/hbdd/hh.html">4️⃣ 换员工微信换电脑</RouterLink></li>
<li><RouterLink to="/hbdd/faq.html">5️⃣ 常见问题答疑</RouterLink></li>
<li><RouterLink to="/hbdd/upfaq.html">6️⃣ 电脑系统高级问题</RouterLink></li>
</ul>
</div></template>


