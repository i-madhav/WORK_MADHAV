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
  
  waitForConditions(
    () => {
        const madhavDiv = document.createElement("div")
        madhavDiv.setAttribute("class" , "madhavContainer")
        madhavDiv.innerHTML = `  <div class="mad-scroll-right">
        <svg class="mad-scroll-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" fill="#FF9E67"/>
            <path d="M7.62976 16.4194H23.259" stroke="white" stroke-width="3.10003" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.4443 23.5047L23.2589 16.4189L15.4443 9.33313" stroke="white" stroke-width="3.10003" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="mad-scroll-left">
        <svg class="mad-scroll-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" fill="#FF9E67"/>
            <path d="M7.62976 16.4194H23.259" stroke="white" stroke-width="3.10003" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.4443 23.5047L23.2589 16.4189L15.4443 9.33313" stroke="white" stroke-width="3.10003" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="mad-card-container">
        <div class="mad-card">
            <div class="mad-card-image">
                <img src="https://s3-alpha-sig.figma.com/img/71a3/741a/b5baa9d9b8326e53e474e7e1776750ce?Expires=1699228800&Signature=AQvZjRc~6kQmKsP64DtVpnfuQUy0~zQzl-Xj2stFHkBx7lc93y~LlhQ6L~BWYQkWFAZ4GPk14MQM7ZWj4a8Qbmhe6SrMEa~kDgkqn3plcQ3jGVgmBEgwscILIhhSg9oluCwSs5~ni4stx6sAWCo~SIE-hKjPx9Flxf6xTGUpU~xn0yjECosMPV-dcFywJUm6nkVSDQmXthdRQwvIGXVu6hmrwUgT7p1~fz1CtD4oNgS9n4p7K0aUecaWJaMjDAlV9LTVy2vZbKEa0lkD9Zw7Bjr10efOGY1WIB2iESjI8ZOoE-lLqivZxmCoZOZpoREPdohfdNxMyt1CqnTNebKKKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" class="mad-card-photo1">
            </div>
        
            <div class="mad-information">
                <h2 class="mad-information-heading">CBD Oils Plus</h2>
                <div class="mad-info">
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon1.png" alt="icon1" class="mad-icon">
                        <p>Vollspektrum Öl</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon3.png" alt="icon2" class="mad-icon">
                        <p>Leicht, hanfig, geringer Nachgeschmack</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon2.png" alt="icon3" class="mad-icon">
                        <p>Starker Entourage Effekt</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/oils%202.png" alt="icon4" class="mad-icon">
                        <p>Trägeröl: Bio-MCT-Öl</p>
                    </div>
                </div>
            </div>
        
            <div class="mad-card-button">
            <a href="#" class="mad-btn-text">Shop CBD Oils Plus</a>
                <svg class="mad-card-button-photo" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path d="M2.13989 9.00049H14.8599" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.50024 16.5L14.8603 9L8.50024 1.5" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-card-image">
                <img src="https://s3-alpha-sig.figma.com/img/d24c/5aca/0d79dcaea66cb6310b8679a527a1043b?Expires=1699228800&Signature=pSWo2W17a9RKcDG~vjNSE1AIOdixtBK-F4JK5t8xkT2yVV40yQuwFaKGkqiJkD-~V34S6Hs5-FJ0LmugLam7WOpSmZweiov9t38VXMXSwIXipvdrY~h3pzcWqFH7dfURJYz59d6QieBDSZm5NWUBf-BtSfjjiLaYmQ3whhwwSp-hQl6Fx0UxyB42exUcqpakJGNkBDuCN9~uvt3j-L6s~fqmDqHmHFFaRbSK7qxNYXsr6UYBQPZSdSLx4S5KEPRC1mqG8EuK97t~7paWaTizAAdOc5mBgfzPAq1R6VaqzR-O1y7ukFzWfeVPLLPrKj-qIkXxrlmlXczYZAro4HvwzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" class="mad-card-photo2">
            </div>
        
            <div class="mad-information">
                <h2 class="mad-information-heading">CBD Oils Classic</h2>
                <div class="mad-info">
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon1.png" alt="icon1" class="mad-icon">
                        <p>Breitspektrum Öl</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon3.png" alt="icon2" class="mad-icon">
                        <p>Erdige, leicht bittere Note</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon2.png" alt="icon3" class="mad-icon">
                        <p>Breites Anwendungspektrum</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/oils%202.png" alt="icon4" class="mad-icon">
                        <p>Trägeröl: Bio-Hanfsamenöl</p>
                    </div>
                </div>
            </div>
        
            <div class="mad-card-button">
            <a href="#" class="mad-btn-text">Shop CBD Oils Classic</a>
                <svg class="mad-card-button-photo" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path d="M2.13989 9.00049H14.8599" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.50024 16.5L14.8603 9L8.50024 1.5" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-card-image">
                <img src="https://s3-alpha-sig.figma.com/img/33b4/e1d4/8ebf45abd4200beb77728ae95b670dc0?Expires=1699228800&Signature=DB12NqkZkdUya5TkkK~lVaSsouJHeaGO3lkAYsJPEURasqGhrPyzvqRO-iPKlUbTaN2Vs933ICtJggzq213DPnY~MSyqXLaF~mW7EP70NZJcjcemcsvq0BKunO-x6dZDmHUca8S871MymG11GasJ28ug0oC78kdvY7s15vN44CcW-UJuO-IfV368HN-6aCAUJ98vrqLZr0PHEgXetW0m6e46Rhd3Zo0Hp4v7XKGB7qZxgr9M6CVZQV6~~nxTeRWm4Pluuyj0AzaHTAhzL0hqUCDp2XPN9L91ep87jMmLBtnqd4Y-jlMG342iadSPgw-J0Lf5jRlxrStOgqpgxg3D5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" class="mad-card-photo3">
            </div>
        
            <div class="mad-information">
                <h2 class="mad-information-heading">CBD Oils Curcumin</h2>
                <div class="mad-info">
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon1.png" alt="icon1" class="mad-icon">
                        <p>Breitspektrum Öl</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon3.png" alt="icon2" class="mad-icon">
                        <p>Herber, leicht pfeffriger Geschmack</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon2.png" alt="icon3" class="mad-icon">
                        <p>Support bei Entzündungen und Schmerzen</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/oils%202.png" alt="icon4" class="mad-icon">
                        <p>Trägeröl: Bio-Schwarzkümmelöl</p>
                    </div>
                </div>
            </div>
        
            <div class="mad-card-button">
            <a href="#" class="mad-btn-text">Shop CBD Oils Curcumin</a>
                <svg class="mad-card-button-photo" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path d="M2.13989 9.00049H14.8599" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.50024 16.5L14.8603 9L8.50024 1.5" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
        
        <div class="mad-card">
            <div class="mad-card-image">
                <img src="https://s3-alpha-sig.figma.com/img/968c/f5a8/41e181397e0b43814103da985f574a1b?Expires=1699228800&Signature=Q6TkwlNO-SHU3m41ZF9jSBIShBdnZtLFtkBDyWUkxpKycm0rSLdRGayG0y0sBbSdfDNQQLlmAK31Hahpvq5GOf0YIa1KUXXO9gnP9kOIJbwfa6Ix3n2F0ahJ69nPysJ0-UIEcRW7Q9fAH7mxakvi2PtgiqPYh8rvg2j6JDTLZ5yLHZy1DeV27UqooAS~JOGy9DsFHPspSix9Wv0b7-OB8haDVP6gi-vtEqNv9FozNezm0rYP7Dhif55BjbtVKocSLqdqSqFn2LZ~aCFzn4BCo9of2iLuz2boklJQqvKn7j7gpDTdj7Rutf0lMjuutcQQyX4ztEy916ZkM87ZkXKhZg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="image" class="mad-card-photo4">
            </div>
        
            <div class="mad-information">
                <h2 class="mad-information-heading">CBG Oils</h2>
                <div class="mad-info">
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon1.png" alt="icon1" class="mad-icon">
                        <p>Breitspektrum CBG Formulierung</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon3.png" alt="icon2" class="mad-icon">
                        <p>Erdiger, hanfiger Geschmack</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/icon2.png" alt="icon3" class="mad-icon">
                        <p>Unterstützung von Nerven- und Hirnfunktion</p>
                    </div>
                    <div class="mad-sub-info">
                        <img src="https://cdn-3.convertexperiments.com/uf/10007840/10007367/oils%202.png" alt="icon4" class="mad-icon">
                        <p>Trägeröl: Bio-Hanfsamenöl</p>
                    </div>
                </div>
            </div>
        
            <div class="mad-card-button">
            <a href="#" class="mad-btn-text">Shop CBD Oils Curcumin</a>
                <svg class="mad-card-button-photo" xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                    <path d="M2.13989 9.00049H14.8599" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.50024 16.5L14.8603 9L8.50024 1.5" stroke="#FF9E67" stroke-width="2.523" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
        </div>
        </div>`
        document.querySelector(".facets-container").before(madhavDiv)
        
        if(innerWidth <= 600){
            const button = document.querySelector(".mad-scroll-right")
            button.addEventListener('click' ,()=>{
            document.querySelector(".madhavContainer").scrollLeft += 600;
                })

            const button2 = document.querySelector(".mad-scroll-left")
            button2.addEventListener('click' ,()=>{
            document.querySelector(".madhavContainer").scrollLeft -= 600;
                })    
        }
    },
    () => document.querySelectorAll('.facets-container').length > 0
  );