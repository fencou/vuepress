<template><div><ul>
<li>
<p>售后问题，部分需要用到远程处理的，请在电脑上下载一份<a href="https://www.faqun.cn/todesk" target="_blank" rel="noopener noreferrer">远程工具<ExternalLinkIcon/></a></p>
</li>
<li>
<p>软件有 3 个版本，在部分地方的使用上，使用有区别，请点击自己使用的版本选项查看，如下</p>
</li>
</ul>
<Tabs id="12" :data='[{"id":"公众版"},{"id":"独立商户版"},{"id":"分销商版"}]'>
<template #title0="{ value, isActive }">公众版</template>
<template #title1="{ value, isActive }">独立商户版</template>
<template #title2="{ value, isActive }">分销商版</template>
<template #tab0="{ value, isActive }">
<p>这里是 <mark>公众版</mark> 的</p>
</template>
<template #tab1="{ value, isActive }">
<p>这里是 <mark>商户版</mark> 的</p>
</template>
<template #tab2="{ value, isActive }">
<p>这里是 <mark>分销商版</mark> 的</p>
</template>
</Tabs>
</div></template>


