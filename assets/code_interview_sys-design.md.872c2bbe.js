import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.1cc28bed.js";const d=JSON.parse('{"title":"系统设计","description":"","frontmatter":{},"headers":[],"relativePath":"code/interview/sys-design.md","filePath":"code/interview/sys-design.md","lastUpdated":1686729147000}'),p={name:"code/interview/sys-design.md"},o=l(`<h1 id="系统设计" tabindex="-1">系统设计 <a class="header-anchor" href="#系统设计" aria-label="Permalink to &quot;系统设计&quot;">​</a></h1><h2 id="电商系统中-如何实现秒杀功能-如何解决商品的超卖问题" tabindex="-1">电商系统中，如何实现秒杀功能？如何解决商品的超卖问题？ <a class="header-anchor" href="#电商系统中-如何实现秒杀功能-如何解决商品的超卖问题" aria-label="Permalink to &quot;电商系统中，如何实现秒杀功能？如何解决商品的超卖问题？&quot;">​</a></h2><p>在电商系统中实现秒杀功能，需要考虑到如下几个方面：</p><ol><li>确定秒杀商品的数量，保证秒杀商品的数量足够满足用户的需求，但不能过多以至于导致商品超卖的问题。</li><li>设计一个合理的倒计时机制，提醒用户秒杀活动即将开始，并且在秒杀活动开始时启动计时器，提醒用户秒杀时间已经过半或者秒杀活动即将结束。</li><li>开发一个高并发的秒杀接口，用于处理大量用户同时发起的秒杀请求。这一步可以通过缓存、队列等技术来实现。</li></ol><p>解决商品超卖的问题，常见的方法有以下几种：</p><ol><li>库存预留。在秒杀活动开始前，对商品的库存进行预留，以避免在秒杀过程中对商品库存进行修改，从而避免商品超卖的问题。</li><li>乐观锁。在秒杀过程中，当用户发起请求时，使用乐观锁的机制来更新商品库存，从而保证在并发情况下不会出现商品超卖的问题。</li><li>悲观锁。在秒杀过程中，当用户发起请求时，使用悲观锁的机制来更新商品库存，通过对商品的行级锁定来保证在并发情况下不会出现商品超卖的问题。悲观锁的方式通常是通过数据库的事务机制来实现的，能够很好的保证数据的一致性和完整性。</li></ol><p>此外，还可以通过限流、防抖等技术来避免秒杀活动出现商品超卖的问题。通过限流，可以限制每个用户对秒杀接口的访问频率，从而避免大量请求同时发送到服务器，造成商品超卖的问题。通过防抖，可以让用户在短时间内只能发起一次秒杀请求，从而避免用户重复发送大量请求，造成商品超卖的问题。</p><h2 id="简述-zookeeper-基础原理以及使用场景" tabindex="-1">简述 Zookeeper 基础原理以及使用场景 <a class="header-anchor" href="#简述-zookeeper-基础原理以及使用场景" aria-label="Permalink to &quot;简述 Zookeeper 基础原理以及使用场景&quot;">​</a></h2><p>Zookeeper 是一个分布式的协调服务，提供了一个统一的接口，用于在分布式系统中维护配置信息、命名服务、组服务等。</p><p>Zookeeper 的基础原理是将数据以树形结构存储在内存中，并通过类似文件系统的方式来维护这些数据。每个节点都可以作为一个父节点，来维护它的子节点；同时，每个节点也可以作为一个子节点，来被它的父节点维护。每个节点都可以存储数据，也可以作为一个空节点，来维护其他节点。</p><p>Zookeeper 使用场景很多，常见的有以下几种：</p><ol><li>分布式配置管理。通过 Zookeeper 维护集群中的配置信息，可以实时的同步配置信息，方便集群中各个节点之间的信息交换。</li><li>分布式命名服务。通过 Zookeeper 维护集群中的命名服务，可以方便集群中各个节点之间的通信，解决节点间通信的复杂性问题。</li><li>分布式协调服务。通过 Zookeeper 维护集群中的协调服务，可以方便集群中各个节点之间的协作，解决节点间协作的复杂性问题。例如，在分布式数据库中，可以使用 Zookeeper 协调各个节点之间的数据备份和恢复等操作。</li></ol><p>此外，Zookeeper 还可以作为分布式锁服务，用于解决节点之间的资源竞争问题。例如，在分布式消息队列中，可以使用 Zookeeper 来协调各个节点之间的消息发送和消费。</p><p>总之，Zookeeper 是一个非常强大的分布式协调服务，可以用于解决分布式系统中各种复杂的协作问题。</p><h2 id="简述什么是两阶段提交" tabindex="-1">简述什么是两阶段提交？ <a class="header-anchor" href="#简述什么是两阶段提交" aria-label="Permalink to &quot;简述什么是两阶段提交？&quot;">​</a></h2><p>两阶段提交（Two-Phase Commit，简称 2PC）是一种分布式事务协议，用于解决分布式系统中的事务一致性问题。两阶段提交协议包括两个阶段：第一阶段是提交阶段，协调者向所有参与者发送提交指令，要求所有参与者提交事务；第二阶段是投票阶段，协调者向所有参与者发送投票指令，要求所有参与者投票表决是否提交事务。</p><p>两阶段提交协议能够保证分布式系统中的事务在所有参与者之间达成一致，并且能够在事务发生错误时进行回滚，从而保证事务的原子性和一致性。</p><p>两阶段提交协议的主要优点是保证了事务的原子性和一致性，能够在分布式系统中有效地维护事务的完整性。但是，两阶段提交协议也有一些缺点，比如性能较差，容易受单点故障的影响等。</p><p>总之，两阶段提交协议是一种非常有用的分布式事务协议，能够在分布式系统中有效地维护事务的一致性和完整性。</p><h2 id="如何设计一个消息队列" tabindex="-1">如何设计一个消息队列 <a class="header-anchor" href="#如何设计一个消息队列" aria-label="Permalink to &quot;如何设计一个消息队列&quot;">​</a></h2><p>设计一个消息队列需要考虑如下几个方面：</p><ol><li><p>定义消息队列的结构体，包括队列的大小、队列中存储的消息数据、队列头和队列尾等信息。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MessageQueue</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> tail;</span></span>
<span class="line"><span style="color:#E1E4E8;">    vector</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Message</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> tail;</span></span>
<span class="line"><span style="color:#24292E;">    vector</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Message</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div></li><li><p>定义消息队列的操作函数，包括初始化、销毁、入队、出队等操作。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(size);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.tail] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Message</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.head].valid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">size</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">(size);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">message</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.tail] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> message;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Message</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">message</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.head].valid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li><li><p>使用锁机制，保证消息队列的线程安全性。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex mtx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(size);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.tail] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Message</span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.head].valid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex mtx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">size</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">(size);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">message</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.tail] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> message;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Message</span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">message</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">queue.data[queue.head].valid) {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.head].valid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ol><p>完整实现</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;mutex&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> id;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::string data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> valid;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MessageQueue</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> head;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> tail;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Message</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> data;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex mtx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">size</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> size;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">resize</span><span style="color:#E1E4E8;">(size);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.size </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.head </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> queue.data[queue.head].valid)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.tail] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.tail].valid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.tail </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.tail </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#F97583;">bool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">MessageQueue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">queue</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">Message</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">message</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">lock_guardstd</span><span style="color:#E1E4E8;">::mutex </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mtx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> queue.tail </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">queue.data[queue.head].valid)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.data[queue.head].valid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    queue.head </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (queue.head </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建消息队列</span></span>
<span class="line"><span style="color:#E1E4E8;">    MessageQueue queue;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(queue, </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 入队</span></span>
<span class="line"><span style="color:#E1E4E8;">    Message message1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;hello&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(queue, message1);</span></span>
<span class="line"><span style="color:#E1E4E8;">    Message message2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;world&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">enqueue</span><span style="color:#E1E4E8;">(queue, message2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 出队</span></span>
<span class="line"><span style="color:#E1E4E8;">    Message message;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">dequeue</span><span style="color:#E1E4E8;">(queue, message);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> message.id </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;: &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> message.data </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 销毁消息队列</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">destroy</span><span style="color:#E1E4E8;">(queue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;mutex&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> id;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::string data;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> valid;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MessageQueue</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> head;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> tail;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::vector</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Message</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> data;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex mtx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">size</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> size;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">resize</span><span style="color:#24292E;">(size);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 销毁消息队列</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">queue</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    queue.size </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 入队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">message</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.head </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> queue.data[queue.head].valid)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列已满</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.tail] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> message;</span></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.tail].valid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.tail </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.tail </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出队</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">MessageQueue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">queue</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">Message</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">message</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">lock_guardstd</span><span style="color:#24292E;">::mutex </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mtx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> queue.tail </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">queue.data[queue.head].valid)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        // 队列为空</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> queue.data[queue.head];</span></span>
<span class="line"><span style="color:#24292E;">    queue.data[queue.head].valid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    queue.head </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (queue.head </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> queue.size;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#6A737D;">    // 创建消息队列</span></span>
<span class="line"><span style="color:#24292E;">    MessageQueue queue;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(queue, </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    // 入队</span></span>
<span class="line"><span style="color:#24292E;">    Message message1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;hello&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(queue, message1);</span></span>
<span class="line"><span style="color:#24292E;">    Message message2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;world&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">enqueue</span><span style="color:#24292E;">(queue, message2);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 出队</span></span>
<span class="line"><span style="color:#24292E;">    Message message;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">dequeue</span><span style="color:#24292E;">(queue, message);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> message.id </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;: &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> message.data </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    // 销毁消息队列</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">destroy</span><span style="color:#24292E;">(queue);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="如何设计一个线程池" tabindex="-1">如何设计一个线程池 <a class="header-anchor" href="#如何设计一个线程池" aria-label="Permalink to &quot;如何设计一个线程池&quot;">​</a></h2><p>如果要用C++设计一个线程池，首先需要使用C++提供的多线程库，比如<code>&lt;thread&gt;</code>头文件。然后，可以定义一个线程池类，包含一个线程容器，用于存储创建的线程。</p><p>在线程池类中，需要定义一个方法用于添加新任务，该方法可以将新任务打包为一个函数对象，然后将其放入一个任务队列中。另外，还需要定义一个方法用于启动线程池，该方法会创建指定数量的线程，每个线程都会不断从任务队列中获取任务并执行。</p><p>线程池类还需要提供一些其他功能，比如停止线程池，等待所有线程完成任务等。以下是一个简单的C++线程池的示例实现：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;thread&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;queue&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;mutex&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;condition_variable&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;atomic&gt;</span></span>
<span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;future&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThreadPool</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#F97583;">public:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ThreadPool</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">num_threads</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        : </span><span style="color:#B392F0;">stop_</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> num_threads; </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">i)</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            threads_.</span><span style="color:#B392F0;">emplace_back</span><span style="color:#E1E4E8;">([</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">]()</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::function</span><span style="color:#F97583;">&lt;void</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> task;</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unique_lock</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mutex_);</span></span>
<span class="line"><span style="color:#E1E4E8;">                        cond_.</span><span style="color:#B392F0;">wait</span><span style="color:#E1E4E8;">(lock, [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">]{ </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> stop_ </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">tasks_.</span><span style="color:#B392F0;">empty</span><span style="color:#E1E4E8;">(); });</span></span>
<span class="line"><span style="color:#E1E4E8;">                        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (stop_ </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> tasks_.</span><span style="color:#B392F0;">empty</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">                            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        task </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;">(tasks_.</span><span style="color:#B392F0;">front</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#E1E4E8;">                        tasks_.</span><span style="color:#B392F0;">pop</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">task</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">~ThreadPool</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unique_lock</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mutex_);</span></span>
<span class="line"><span style="color:#E1E4E8;">            stop_ </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        cond_.</span><span style="color:#B392F0;">notify_all</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">auto&amp;</span><span style="color:#E1E4E8;"> thread : threads_)</span></span>
<span class="line"><span style="color:#E1E4E8;">            thread.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">template</span><span style="color:#E1E4E8;"> &lt;</span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">auto</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AddTask</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">task</span><span style="color:#E1E4E8;">) -&gt; </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">future</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">decltype</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">task</span><span style="color:#E1E4E8;">())&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">auto</span><span style="color:#E1E4E8;"> wrapper </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">make_shared</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">packaged_task</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">decltype</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">task</span><span style="color:#E1E4E8;">())()&gt;&gt;(</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">move</span><span style="color:#E1E4E8;">(task));</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unique_lock</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mutex_);</span></span>
<span class="line"><span style="color:#E1E4E8;">            tasks_.</span><span style="color:#B392F0;">emplace</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">]{ (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">wrapper)(); });</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        cond_.</span><span style="color:#B392F0;">notify_one</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> wrapper-&gt;</span><span style="color:#B392F0;">get_future</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Wait</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unique_lock</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mutex_);</span></span>
<span class="line"><span style="color:#E1E4E8;">        cond_.</span><span style="color:#B392F0;">wait</span><span style="color:#E1E4E8;">(lock, [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">]{ </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> tasks_.</span><span style="color:#B392F0;">empty</span><span style="color:#E1E4E8;">(); });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Size</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::unique_lock</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lock</span><span style="color:#E1E4E8;">(mutex_);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> tasks_.</span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">private:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::thread</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> threads_;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::queue</span><span style="color:#F97583;">&lt;</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::function</span><span style="color:#F97583;">&lt;void</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">&gt;&gt;</span><span style="color:#E1E4E8;"> tasks_;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::mutex mutex_;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::condition_variable cond_;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::atomic</span><span style="color:#F97583;">&lt;bool&gt;</span><span style="color:#E1E4E8;"> stop_;</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;thread&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;vector&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;queue&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;mutex&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;condition_variable&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;atomic&gt;</span></span>
<span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;future&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ThreadPool</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#D73A49;">public:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ThreadPool</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">size_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num_threads</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        : </span><span style="color:#6F42C1;">stop_</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">size_t</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> num_threads; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i)</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            threads_.</span><span style="color:#6F42C1;">emplace_back</span><span style="color:#24292E;">([</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">]()</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::function</span><span style="color:#D73A49;">&lt;void</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> task;</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unique_lock</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mutex_);</span></span>
<span class="line"><span style="color:#24292E;">                        cond_.</span><span style="color:#6F42C1;">wait</span><span style="color:#24292E;">(lock, [</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">]{ </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> stop_ </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">tasks_.</span><span style="color:#6F42C1;">empty</span><span style="color:#24292E;">(); });</span></span>
<span class="line"><span style="color:#24292E;">                        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (stop_ </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> tasks_.</span><span style="color:#6F42C1;">empty</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">                            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                        task </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">(tasks_.</span><span style="color:#6F42C1;">front</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#24292E;">                        tasks_.</span><span style="color:#6F42C1;">pop</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">task</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            });</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">~ThreadPool</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unique_lock</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mutex_);</span></span>
<span class="line"><span style="color:#24292E;">            stop_ </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        cond_.</span><span style="color:#6F42C1;">notify_all</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">auto&amp;</span><span style="color:#24292E;"> thread : threads_)</span></span>
<span class="line"><span style="color:#24292E;">            thread.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">template</span><span style="color:#24292E;"> &lt;</span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">auto</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AddTask</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">T</span><span style="color:#24292E;"> </span><span style="color:#E36209;">task</span><span style="color:#24292E;">) -&gt; </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">future</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">decltype</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">task</span><span style="color:#24292E;">())&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">auto</span><span style="color:#24292E;"> wrapper </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">make_shared</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">packaged_task</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">decltype</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">task</span><span style="color:#24292E;">())()&gt;&gt;(</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">move</span><span style="color:#24292E;">(task));</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unique_lock</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mutex_);</span></span>
<span class="line"><span style="color:#24292E;">            tasks_.</span><span style="color:#6F42C1;">emplace</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">]{ (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">wrapper)(); });</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        cond_.</span><span style="color:#6F42C1;">notify_one</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> wrapper-&gt;</span><span style="color:#6F42C1;">get_future</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Wait</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unique_lock</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mutex_);</span></span>
<span class="line"><span style="color:#24292E;">        cond_.</span><span style="color:#6F42C1;">wait</span><span style="color:#24292E;">(lock, [</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">]{ </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> tasks_.</span><span style="color:#6F42C1;">empty</span><span style="color:#24292E;">(); });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">size_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Size</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::unique_lock</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lock</span><span style="color:#24292E;">(mutex_);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> tasks_.</span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">private:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::vector</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::thread</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> threads_;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::queue</span><span style="color:#D73A49;">&lt;</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::function</span><span style="color:#D73A49;">&lt;void</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> tasks_;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::mutex mutex_;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::condition_variable cond_;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::atomic</span><span style="color:#D73A49;">&lt;bool&gt;</span><span style="color:#24292E;"> stop_;</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>上面的代码，可以使用以下方式来创建一个线程池，并通过调用AddTask方法添加任务：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 创建一个线程池，包含4个线程</span></span>
<span class="line"><span style="color:#B392F0;">ThreadPool</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pool</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加一个任务，该任务是一个普通的函数</span></span>
<span class="line"><span style="color:#F97583;">auto</span><span style="color:#E1E4E8;"> task1 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">AddTask</span><span style="color:#E1E4E8;">([]()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello from a worker thread!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">42</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加一个任务，该任务是一个 Lambda 表达式</span></span>
<span class="line"><span style="color:#F97583;">auto</span><span style="color:#E1E4E8;"> task2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">AddTask</span><span style="color:#E1E4E8;">([]()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello from another worker thread!&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 等待所有任务完成</span></span>
<span class="line"><span style="color:#E1E4E8;">pool.</span><span style="color:#B392F0;">Wait</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取任务的返回值</span></span>
<span class="line"><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Task1 returned &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> task1.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Task2 returned &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> task2.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取当前任务队列的长度</span></span>
<span class="line"><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Task queue size: &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> pool.</span><span style="color:#B392F0;">Size</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 线程池对象在析构时会自动停止所有线程</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 创建一个线程池，包含4个线程</span></span>
<span class="line"><span style="color:#6F42C1;">ThreadPool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pool</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加一个任务，该任务是一个普通的函数</span></span>
<span class="line"><span style="color:#D73A49;">auto</span><span style="color:#24292E;"> task1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pool.</span><span style="color:#6F42C1;">AddTask</span><span style="color:#24292E;">([]()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello from a worker thread!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">42</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加一个任务，该任务是一个 Lambda 表达式</span></span>
<span class="line"><span style="color:#D73A49;">auto</span><span style="color:#24292E;"> task2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pool.</span><span style="color:#6F42C1;">AddTask</span><span style="color:#24292E;">([]()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello from another worker thread!&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 等待所有任务完成</span></span>
<span class="line"><span style="color:#24292E;">pool.</span><span style="color:#6F42C1;">Wait</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取任务的返回值</span></span>
<span class="line"><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Task1 returned &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> task1.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Task2 returned &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> task2.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取当前任务队列的长度</span></span>
<span class="line"><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Task queue size: &quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> pool.</span><span style="color:#6F42C1;">Size</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 线程池对象在析构时会自动停止所有线程</span></span></code></pre></div><p>线程池类中还有很多可以改进的地方，比如可以支持线程池动态扩容、支持自定义线程启动参数等。完整实现需要考虑更多细节，这里仅提供了一个简单的实现供参考。</p><h2 id="简述一致性哈希算法的实现方式及原理" tabindex="-1">简述一致性哈希算法的实现方式及原理 <a class="header-anchor" href="#简述一致性哈希算法的实现方式及原理" aria-label="Permalink to &quot;简述一致性哈希算法的实现方式及原理&quot;">​</a></h2><h2 id="简述-cap-理论" tabindex="-1">简述 CAP 理论 <a class="header-anchor" href="#简述-cap-理论" aria-label="Permalink to &quot;简述 CAP 理论&quot;">​</a></h2><h2 id="项目上有什么技术难点" tabindex="-1">项目上有什么技术难点？ <a class="header-anchor" href="#项目上有什么技术难点" aria-label="Permalink to &quot;项目上有什么技术难点？&quot;">​</a></h2><h2 id="了解高并发的解决方案吗-例如动静分离-缓存-负载均衡" tabindex="-1">了解高并发的解决方案吗？例如动静分离，缓存，负载均衡 <a class="header-anchor" href="#了解高并发的解决方案吗-例如动静分离-缓存-负载均衡" aria-label="Permalink to &quot;了解高并发的解决方案吗？例如动静分离，缓存，负载均衡&quot;">​</a></h2><h2 id="有哪些实现服务发现的方法" tabindex="-1">有哪些实现服务发现的方法？ <a class="header-anchor" href="#有哪些实现服务发现的方法" aria-label="Permalink to &quot;有哪些实现服务发现的方法？&quot;">​</a></h2><h2 id="如何阅读大型项目的源码" tabindex="-1">如何阅读大型项目的源码？ <a class="header-anchor" href="#如何阅读大型项目的源码" aria-label="Permalink to &quot;如何阅读大型项目的源码？&quot;">​</a></h2><h2 id="假如明天是活动高峰-qps-预计会翻10倍-你要怎么做" tabindex="-1">假如明天是活动高峰？QPS 预计会翻10倍，你要怎么做？ <a class="header-anchor" href="#假如明天是活动高峰-qps-预计会翻10倍-你要怎么做" aria-label="Permalink to &quot;假如明天是活动高峰？QPS 预计会翻10倍，你要怎么做？&quot;">​</a></h2><h2 id="kafka-发送消息是如何保证可靠性的" tabindex="-1">Kafka 发送消息是如何保证可靠性的？ <a class="header-anchor" href="#kafka-发送消息是如何保证可靠性的" aria-label="Permalink to &quot;Kafka 发送消息是如何保证可靠性的？&quot;">​</a></h2><p>Kafka 是一个分布式消息队列系统，用于存储和转发消息。它使用多种机制来保证消息的可靠性。</p><p>首先，Kafka 将消息分成一系列的分区，并将每个分区保存到一个或多个副本节点上。这种分区和副本机制可以保证消息的可用性，即使某个节点出现故障，也能通过其它节点访问消息。</p><p>其次，Kafka 使用了严格的消息发布顺序和消费顺序。每条消息都有一个唯一的编号，并且消费者在消费消息时必须按照消息的编号顺序进行消费。这样就能保证消息的顺序性和一致性。</p><p>此外，Kafka 还支持消息确认机制。消费者可以选择在消费消息后进行确认，Kafka 将在收到消费者的确认后才会删除消息，从而保证消息的持久性。</p><p>总之，Kafka 通过多种机制来保证消息的可靠性，包括副本机制、消息顺序性、消息确认等。这些机制的综合作用，为 Kafka 带来了高可用性和高可靠性。</p>`,45),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
