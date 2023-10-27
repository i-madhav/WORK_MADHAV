function waitForConditions(callback, ...conditions) {
  const promises = conditions.map(
    (condition) =>
      new Promise((resolve) => {
        let interval = setInterval(() => {
          if (condition()) {
            clearInterval(interval);
            resolve(true);
          }
        }, 100);
      })
  );

  Promise.all(promises).then(() => {
    callback();
  });
}

function loadSlickSlider(callback) {
  // Check if Slick Slider CSS is already loaded
  if (
    !document.querySelector(
      'link[href^="https://cdn.jsdelivr.net/npm/slick-carousel"]'
    )
  ) {
    var slickCSS = document.createElement("link");
    slickCSS.rel = "stylesheet";
    slickCSS.type = "text/css";
    slickCSS.href =
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";
    document.head.appendChild(slickCSS);
  }

  // Check if Slick Slider Theme CSS is already loaded
  if (
    !document.querySelector(
      'link[href^="https://cdn.jsdelivr.net/npm/slick-carousel"]'
    )
  ) {
    var slickThemeCSS = document.createElement("link");
    slickThemeCSS.rel = "stylesheet";
    slickThemeCSS.type = "text/css";
    slickThemeCSS.href =
      "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css";
    document.head.appendChild(slickThemeCSS);
  }

  // Check if jQuery is loaded
  if (typeof jQuery === "undefined") {
    var jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.onload = function () {
      // Now that jQuery is loaded, load Slick Slider
      loadSlickSlider(callback);
    };
    document.head.appendChild(jqueryScript);
  } else {
    // Check if Slick Slider JS is already loaded
    if (typeof $.fn.slick === "undefined") {
      var slickScript = document.createElement("script");
      slickScript.src =
        "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
      slickScript.onload = callback;
      document.head.appendChild(slickScript);
    } else {
      callback();
    }
  }
}

waitForConditions(
  () => {
    const newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "madCustomer");
    newDiv2.innerHTML = `<div class="madHeading">
        <h2>What Our Customers Say?</h2>
        </div>
        
        <div class="mad-customerPanel">
        <div class="mad-card">
            <div class="mad-cardImage">
                <img class="mad-card-img" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cusRe1.jpg" alt="cus1">
                <img class="mad-card-company" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/amedissys.png" alt="cus1">
            </div>
        
            <div class="mad-cardInformation">
                <div class="mad-cardInfoText">
                    <p class="mad-Text1"><strong> Industry | </strong>Hospital and Health Care</p>
        
                    <p class="mad-Text2">It’s amazing how fast you guys respond</p>
        
                    <p class="mad-Text3">Sometimes we submit tickets that aren’t
                        even incident related, we just have a
                        question that we want to talk through
                        with someone and your team is always
                        there to offer advice and help right away.
                        We, we leverage you guys, not just for
                        when something's on fire. We truly see
                        US Cloud as a partner.
                    </p>
                </div>
        
                <div class="mad-cardInfoUser">
                    <p class="mad-userName">- Ed L</p>
                    <p class="mad-conText">View Full Conversation</p>
                </div>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-cardImage">
            <img class="mad-card-img" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cusRe2.jpg" alt="cus1">
            <img class="mad-card-company" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/bottomline.png" alt="cus1">  
            </div>
            <div class="mad-cardInformation">
                <div class="mad-cardInfoText">
                    <p class="mad-Text1"><strong> Industry | </strong>Financial Services</p>
        
                    <p class="mad-Text2">I just felt like, wow, that was amazing</p>
        
                    <p class="mad-Text3">And within an hour, within an hour, US
                        Cloud responded with, I wanna say, 4
                        engineers. So not only did they bring the
                        right guys to the call, but they brought
                        the cavalry. And it was great because we
                        needed that diversity because it was
                        unique problem... And I just felt like, wow,
                        that was amazing. That was unlike
                        anything I had experienced with
                        Microsoft in my eight years of being with
                        premiere, so I was like…we made the
                        right choice.
                    </p>
                </div>
        
                <div class="mad-cardInfoUser">
                    <p class="mad-userName">- Bob L</p>
                    <p class="mad-conText">View Full Conversation</p>
                </div>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-cardImage">
            <img class="mad-card-img" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cusRe3.jpg" alt="cus1">
            <img class="mad-card-company" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/Universal-Health-Services-Inc.png" alt="cus1">                  
            </div>
            <div class="mad-cardInformation">
                <div class="mad-cardInfoText">
                    <p class="mad-Text1"><strong> Industry | </strong>Hospital and Health Care</p>
        
                    <p class="mad-Text2">A big part of us being successful in
                        moving to US Cloud</p>
        
                    <p class="mad-Text3">I think our experience [with US Cloud] is
                        much more positive than any experience
                        we've ever had with Microsoft, and I
                        think that's one of the reasons that we
                        were successful in this change. It's a big
                        pill to swallow for an organization,
                        especially a large organization, to step
                        away from first party support. A big part
                        of us being successful in moving to US
                        Cloud was that responsiveness.
                    </p>
                </div>
        
                <div class="mad-cardInfoUser">
                    <p class="mad-userName">- Ed P</p>
                    <p class="mad-conText">View Full Conversation</p>
                </div>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-cardImage">
            <img class="mad-card-img" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cusRe5.jpg" alt="cus1">
            <img class="mad-card-company" src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/saintLouisUniveristy.png" alt="cus1">                         
            </div>
            <div class="mad-cardInformation">
                <div class="mad-cardInfoText">
                    <p class="mad-Text1"><strong> Industry | </strong>Higher Education</p>
        
                    <p class="mad-Text2">Microsoft burned hours</p>
        
                    <p class="mad-Text3">There were times with Microsoft where
                        we've burned 15 hours and have nothing
                        to show for it. Some tickets are more
                        complex, so they do take time. But I just
                        really feel like US Cloud is focused on
                        delivering value.
                    </p>
                </div>
        
                <div class="mad-cardInfoUser">
                    <p class="mad-userName">- John H</p>
                    <p class="mad-conText">View Full Conversation</p>
                </div>
            </div>
        </div>
        </div>`;
    document.querySelector(".componentContentSectionContainer").after(newDiv2);

    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "madContainerFeature");
    newDiv.innerHTML = ` <div class="madContainerFeature-heading">
        <p>Why Replace Microsoft with US Cloud?</p>
        </div>
        <div class="mad-feature">
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe1.png" alt="">
            <p>Save 30-50% over Microsoft Premier/Microsoft Unified</p>
        </div>
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe2.png" alt="">
            <p>25% faster Response Time than Microsoft Unified</p>
        </div>
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe3.png" alt="">
            <p>All-American team of Microsoft-Certified Engineers</p>
        </div>
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe4.png" alt="">
            <p>24/7 Customer Support</p>
        </div>
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe5.png" alt="">    
            <p>Dedicated TAM on every account</p>
        </div>
        <div class="mad-box">
            <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007341/cloudRe6.png" alt="">
            <p>Only Gartner-Recognized Complete Replacement for Microsoft Unified</p>
        </div>
        </div>`;
    document
      .querySelector(".componentContentSectionContainer")
      .appendChild(newDiv);
  },
  () =>
    document.querySelectorAll(".componentContentSectionContainer").length > 0
);

waitForConditions(
  () => {
    loadSlickSlider(function () {
      jQuery(".mad-customerPanel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
    });
  },
  () => document.querySelectorAll(".mad-customerPanel").length > 0,
  () => typeof jQuery == "function"
);
