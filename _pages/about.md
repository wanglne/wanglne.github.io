---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from: 
  - /about/
  - /about.html
---
<h1 class="main-heading">Hi there <img src="images/Hi.gif" width="40px"> Welcome to my Homepage!</h1>

I am a CS Ph.D. student in the <a class="inline-affiliation" href="https://wwj95.github.io/"><img src="/images/aspirelab-icon.png" alt="" width="18" height="18">ASPIRE Lab</a> at [ShanghaiTech University](https://sist.shanghaitech.edu.cn), advised by Prof. [Wenjie Wang](https://wwj95.github.io/). Prior to that, I received my bachelor's degree from [Northwest A&F University](https://www.nwsuaf.edu.cn/) in 2024.

My research focuses on <span class="research-keyword">AI safety, alignment, and post-training</span> for LLMs and VLMs. Recently, I have been exploring <span class="research-keyword">latent space reasoning</span> and <span class="research-keyword">looped language models (LoopLMs)</span>, with an emphasis on <span class="research-keyword">efficient post-training</span> and safety alignment.

News
---------------
<div class="news-box">
  <ul class="news-list">
    <li><time class="news-date" datetime="2026-09">[2026.09]</time>&nbsp;<span class="news-content">🎉🎉&nbsp;<strong>SaLR</strong> was accepted to <strong>NeurIPS 2026</strong>!</span></li>
    <li><time class="news-date" datetime="2026-09">[2026.09]</time>&nbsp;<span class="news-content">🎉🎉&nbsp;One paper was accepted to <strong>ACML 2026</strong>!</span></li>
    <li><time class="news-date" datetime="2026-08">[2026.08]</time>&nbsp;<span class="news-content">🎉🎉&nbsp;One paper was accepted to <strong>NLPCC 2026</strong>!</span></li>
    <li><time class="news-date" datetime="2026-06">[2026.06]</time>&nbsp;<span class="news-content">🎓🎓&nbsp;I officially became a Ph.D. student at ShanghaiTech University!</span></li>
    <li><time class="news-date" datetime="2026-05">[2026.05]</time>&nbsp;<span class="news-content">🎉🎉&nbsp;<strong>EVA</strong> was accepted for publication in <strong>IEEE TPAMI 2026</strong>!</span></li>
    <li><time class="news-date" datetime="2025-05">[2025.05]</time>&nbsp;<span class="news-content">🎉🎉&nbsp;<strong>DELMAN</strong> was accepted to <strong>ACL 2025</strong>!</span></li>
    <li><time class="news-date" datetime="2024-09">[2024.09]</time>&nbsp;<span class="news-content">🎓🎓&nbsp;I began my master's studies at ShanghaiTech University!</span></li>
  </ul>
</div>


Publications
--------------
<div class="pub-button-container" role="group" aria-label="Filter publications">
  <button type="button" class="pub-button active" data-publication-filter="all" aria-pressed="true">All</button>
  <button type="button" class="pub-button" data-publication-filter="accepted" aria-pressed="false">Accepted</button>
  <button type="button" class="pub-button" data-publication-filter="preprint" aria-pressed="false">Preprints</button>
</div>

<!-- Set data-status to "accepted" or "preprint"; use a gray "Preprint" image badge for preprints. -->
<div class="publication-list" data-publication-list>
<article class="publication-entry publication-row" data-status="preprint">
  <div class="publication-media">
    <span class="publication-venue-badge">Preprint</span>
    <img src="images/LoopOPD_intro.png" alt="Overview of dynamic cross-loop on-policy distillation for looped language models" width="3721" height="1315" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">Recurrent Self-Improvement: Dynamic Cross-Loop On-Policy Distillation for Looped Language Models</h3>
    <p class="pub-authors"><strong class="pub-author-self">Yi Wang</strong>, Rui Qian, Yu Li, Haoyang Yao, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">Preprint</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/abs/2610.10623">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <span class="code pub-resource">[<i class="fab fa-github" aria-hidden="true"></i>Code] <span class="pub-coming-soon">(Coming soon)</span></span>
      <span class="models pub-resource">[<img class="hf-icon" src="/images/huggingface-logo.svg" width="95" height="88" alt="" aria-hidden="true" loading="lazy" decoding="async">Models] <span class="pub-coming-soon">(Coming soon)</span></span>
    </p>
  </div>
</article>

<article class="publication-entry publication-row" data-status="preprint">
  <div class="publication-media">
    <span class="publication-venue-badge">Preprint</span>
    <img src="images/SafeBridge_intro.png" alt="Safety challenges across recurrent depths in looped language models" width="4409" height="1540" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">Safe at One Loop, Risky at Another: Aligning Safety Across Recurrent Depths in Looped Language Models</h3>
    <p class="pub-authors"><strong class="pub-author-self">Yi Wang<sup>*</sup></strong>, Xiuyuan Qi<sup>*</sup>, Dongqi Han, Dongsheng Li, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">Preprint</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/abs/2610.10625">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <span class="code pub-resource">[<i class="fab fa-github" aria-hidden="true"></i>Code] <span class="pub-coming-soon">(Coming soon)</span></span>
      <span class="models pub-resource">[<img class="hf-icon" src="/images/huggingface-logo.svg" width="95" height="88" alt="" aria-hidden="true" loading="lazy" decoding="async">Models] <span class="pub-coming-soon">(Coming soon)</span></span>
    </p>
  </div>
</article>



<article class="publication-entry publication-row" data-status="accepted">
  <div class="publication-media publication-media--image-bottom">
    <span class="publication-venue-badge">NeurIPS 2026</span>
    <img src="images/SaLR_method.svg" alt="Overview of Safety-aware Latent Space Reasoning (SaLR)" width="832" height="337" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">Safety-Aware Latent Space Reasoning in Large Language Models</h3>
    <p class="pub-authors"><strong class="pub-author-self">Yi Wang<sup>*</sup></strong>, Wenjie Wang<sup>*&dagger;</sup>, Hongye Qiu, Yu Pan.</p>
    <p class="pub-meta"><span class="pub-venue">NeurIPS 2026</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="/papers/SaLR_NIPS2026.pdf" target="_blank" rel="noopener">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <a class="code" href="https://github.com/wanglne/SaLR">[<i class="fab fa-github" aria-hidden="true"></i>Code]</a>
    </p>
  </div>
</article>

<article class="publication-entry publication-row" data-status="accepted">
  <div class="publication-media">
    <span class="publication-venue-badge">TPAMI 2026</span>
    <img src="images/EVA_method.png" alt="Overview of EVA: Editing for Versatile Alignment against Jailbreaks" width="2369" height="751" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">EVA: Editing for Versatile Alignment against Jailbreaks</h3>
    <p class="pub-authors"><strong class="pub-author-self">Yi Wang</strong>, Hongye Qiu, Yue Xu, Sibei Yang, Zhan Qin, Minlie Huang, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">IEEE TPAMI 2026</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/abs/2605.14750">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <a class="ieee" href="https://ieeexplore.ieee.org/abstract/document/11523146">[<i class="fas fa-external-link-alt" aria-hidden="true"></i>IEEE]</a>
      <a class="code" href="https://github.com/wanglne/EVA">[<i class="fab fa-github" aria-hidden="true"></i>Code]</a>
      <a class="models" href="https://huggingface.co/collections/wanglne/eva-editing-for-versatile-alignment-against-jailbreaks">[<img class="hf-icon" src="/images/huggingface-logo.svg" width="95" height="88" alt="" aria-hidden="true" loading="lazy" decoding="async">Models]</a>
      <a class="rednote" href="https://xhslink.cn/o/2QDhmm4LoY1" target="_blank" rel="noopener" title="Read on Xiaohongshu (RedNote)">[<i class="fas fa-book" aria-hidden="true"></i>RedNote]</a>
    </p>
  </div>
</article>
<article class="publication-entry publication-row" data-status="accepted">
  <div class="publication-media publication-media--image-bottom">
    <span class="publication-venue-badge">NLPCC 2026</span>
    <img src="images/DRGAP.png" alt="Overview of DR.GAP: Gender-aware prompting with decoupled reasoning" width="3529" height="1434" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">DR.GAP: Mitigating Bias in Large Language Models using Gender-Aware Prompting with Decoupled Reasoning</h3>
    <p class="pub-authors">Hongye Qiu<sup>*</sup>, Yue Xu<sup>*</sup>, <strong class="pub-author-self">Yi Wang</strong>, Meikang Qiu, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">NLPCC 2026</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/abs/2502.11603">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <a class="code" href="https://github.com/davidwye/DRGAP-main">[<i class="fab fa-github" aria-hidden="true"></i>Code]</a>
    </p>
  </div>
</article>
<article class="publication-entry publication-row" data-status="accepted">
  <div class="publication-media">
    <span class="publication-venue-badge">ACML 2026</span>
    <img src="images/acml2026.jpg" alt="Differential privacy training workflow for preference alignment on survey-derived data" width="1534" height="775" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">Differential Privacy Protected Preference Alignment on Survey Derived Data</h3>
    <p class="pub-authors">Xiuyuan Qi, <strong class="pub-author-self">Yi Wang</strong>, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">ACML 2026</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <span class="paper pub-resource">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper] <span class="pub-coming-soon">(Coming soon)</span></span>
    </p>
  </div>
</article>
<article class="publication-entry publication-row" data-status="preprint">
  <div class="publication-media">
    <span class="publication-venue-badge">Preprint</span>
    <img src="images/GPO-V.svg" alt="Response patterns of diffusion and autoregressive vision-language models in GPO-V" width="469" height="177" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">GPO-V: Jailbreak Diffusion Vision Language Model by Global Probability Optimization</h3>
    <p class="pub-authors">Yu Pan, Andi Zhang, <strong class="pub-author-self">Yi Wang</strong>, Sibei Yang, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">Preprint</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/pdf/2605.07399" target="_blank" rel="noopener">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
    </p>
  </div>
</article>
<article class="publication-entry publication-row" data-status="accepted">
  <div class="publication-media">
    <span class="publication-venue-badge">ACL 2025</span>
    <img src="images/DELMAN_method.jpg" alt="Overview of DELMAN: Dynamic defense against language model jailbreaking with model editing" width="2867" height="2388" loading="lazy" decoding="async">
  </div>
  <div class="publication-info">
    <h3 class="pub-title">DELMAN: Dynamic Defense Against Large Language Model Jailbreaking with Model Editing</h3>
    <p class="pub-authors"><strong class="pub-author-self">Yi Wang</strong>, Fenghua Weng, Sibei Yang, Zhan Qin, Minlie Huang, Wenjie Wang<sup>&dagger;</sup>.</p>
    <p class="pub-meta"><span class="pub-venue">ACL 2025</span></p>
    <p class="pub-meta pub-links pub-links--row">
      <a class="paper" href="https://arxiv.org/abs/2502.11647" target="_blank" rel="noopener">[<i class="fas fa-file-alt" aria-hidden="true"></i>Paper]</a>
      <a class="code" href="https://github.com/wanglne/DELMAN" target="_blank" rel="noopener">[<i class="fab fa-github" aria-hidden="true"></i>Code]</a>
      <a class="rednote" href="https://xhslink.cn/o/68AriK2KclL" target="_blank" rel="noopener" title="Read on Xiaohongshu (RedNote)">[<i class="fas fa-book" aria-hidden="true"></i>RedNote]</a>
    </p>
  </div>
</article>
</div>
<p class="publication-empty" data-publication-empty role="status" hidden>No preprints to display yet.</p>

<script src="assets/js/show_publications.js"></script>
<script src="assets/js/pub_media_rotator.js"></script>


Education
--------------
<div class="timeline" aria-label="Education timeline">
  <div class="timeline__item">
    <div class="timeline__date">2024.09 - Present</div>
    <div class="timeline__axis" aria-hidden="true"></div>
    <div class="timeline__card">
      <div class="timeline__main">
        <div class="timeline__title">ShanghaiTech University</div>
        <div class="timeline__meta">Ph.D. Student</div>
      </div>
      <div class="timeline__logo timeline__logo--wordmark">
        <img src="/images/shanghaitech-logo.svg" width="1057" height="283" alt="ShanghaiTech University logo" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
  <div class="timeline__item">
    <div class="timeline__date">2020.09 - 2024.06</div>
    <div class="timeline__axis" aria-hidden="true"></div>
    <div class="timeline__card">
      <div class="timeline__main">
        <div class="timeline__title">Northwest A&amp;F University</div>
        <div class="timeline__meta">Undergraduate</div>
      </div>
      <div class="timeline__logo timeline__logo--wordmark">
        <img src="/images/nwsuaf-logo.svg" width="627" height="125" alt="Northwest A&amp;F University logo" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
</div>

Experience
--------------
<div class="timeline" aria-label="Experience timeline">
  <div class="timeline__item">
    <div class="timeline__date">2026.06 - 2026.09</div>
    <div class="timeline__axis" aria-hidden="true"></div>
    <div class="timeline__card timeline__card--experience">
      <div class="timeline__main">
        <div class="timeline__title">Microsoft Research Asia (MSRA)</div>
        <div class="timeline__meta">Research Collaboration</div>
      </div>
      <div class="timeline__logo timeline__logo--msra">
        <img class="timeline__microsoft-symbol" src="/images/microsoft-logo.svg" width="21" height="21" alt="Microsoft logo" loading="lazy" decoding="async">
        <img class="timeline__msra-wordmark" src="/images/msra-logo.png" width="1117" height="523" alt="Microsoft Research Asia logo" loading="lazy" decoding="async">
      </div>
    </div>
  </div>
</div>


Services
--------
<ul class="service-list">
  <li class="service-row">
    <span class="service-label">[Conference Reviewer]</span>
    <ul class="service-content service-items">
      <li>ICLR 2027</li>
      <li>ACL ARR 2025, 2026</li>
    </ul>
  </li>
  <li class="service-row">
    <span class="service-label">[Journal Reviewer]</span>
    <ul class="service-content service-items">
      <li>Information Fusion<span class="service-ranking">（中科院一区 TOP，JCR Q1）</span></li>
      <li>Pattern Recognition<span class="service-ranking">（中科院一区 TOP，JCR Q1）</span></li>
    </ul>
  </li>
  <li class="service-row">
    <span class="service-label">[Open Source Contributor]</span>
    <ul class="service-content service-items">
      <li>
      <div class="service-model">
        <a class="service-brand" href="https://huggingface.co/ByteDance"><img src="/images/bytedance-logo.png" width="200" height="200" alt="" loading="lazy" decoding="async">ByteDance</a>
        <span class="service-model__separator" aria-hidden="true">/</span>
        <a class="service-brand" href="https://huggingface.co/ByteDance/Ouro-1.4B-Thinking"><img class="service-logo--ouro" src="/images/ouro-logo-transparent.png" width="1940" height="811" alt="" loading="lazy" decoding="async">Ouro-1.4B-Thinking</a>
      </div>
      <div class="service-note">Hugging Face model repository contributor</div>
      </li>
    </ul>
  </li>
</ul>


Awards
--------
<ul class="news-list award-list">
  <li><time class="news-date" datetime="2024">[2024]</time><span class="news-content">Outstanding Student</span></li>
  <li><time class="news-date" datetime="2023">[2023]</time><span class="news-content">🏅Provincial First Prize, 15th National College Student Mathematics Competition</span></li>
  <li><time class="news-date" datetime="2022">[2022]</time><span class="news-content">Academic Scholarship</span></li>
  <li><time class="news-date" datetime="2021">[2021]</time><span class="news-content">Outstanding Student Leader</span></li>
</ul>
