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
    document.querySelector(".componentSplashContent").innerHTML = `<div class="splashTagline">The Global Leader in Third-Party Microsoft Enterprise Support</div>
<h1 class="mad-UsContainer-heading">Worldclass Microsoft Support</h1>
<ul class="mad-UsContainer-ul">
    <li class="mad-UsContainer-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_21_4743)">
              <path d="M-2.09601 22.0961H22.0965V-2.09595H-2.09601V22.0961ZM8.84549 19.7571C8.99199 19.7621 9.15749 19.7645 9.32749 19.7651C9.16399 19.7691 9.00299 19.7666 8.84549 19.7571ZM19.331 9.63955C19.3445 10.1596 19.342 10.3566 19.3065 10.7236C18.695 15.9666 14.4945 19.4286 10.101 19.7561C10.0705 19.757 10.0415 19.7581 10.013 19.7591C9.12599 19.792 9.27299 19.889 10.013 19.7591C11.137 19.562 13.6275 18.8421 15.9375 16.5836C18.1235 14.4456 19.3275 11.8191 19.331 9.63955C19.328 9.53205 19.325 9.41205 19.321 9.27305C19.3285 9.39355 19.3315 9.51605 19.331 9.63955ZM17.5575 4.26755C17.912 4.78355 18.1825 5.16855 18.717 6.45105C19.69 9.06205 18.3825 12.9576 15.3025 15.9696C11.8965 19.3001 7.71549 20.6846 3.73249 17.9286C3.67549 17.8891 3.61999 17.8501 3.56899 17.8131C3.62249 17.8531 3.67699 17.8911 3.73249 17.9286C6.31799 19.6771 10.8585 18.5266 14.393 15.0711C17.966 11.5766 19.2615 6.94755 17.5575 4.26755C17.494 4.17505 17.4325 4.08655 17.3765 4.00505C17.44 4.09005 17.5005 4.17805 17.5575 4.26755ZM13.24 0.797553C14.5905 1.36955 15.4795 2.02705 15.9035 2.47455C18.2975 5.00255 17.1 10.1206 13.2285 13.906C9.30999 17.7376 2.92249 19.4261 1.09499 14.7661C3.38049 17.1791 8.22949 16.2056 11.925 12.5921C16.273 8.34055 16.961 2.51105 13.24 0.797553C13.148 0.758553 13.049 0.717052 12.941 0.671552C13.043 0.709553 13.142 0.752553 13.24 0.797553ZM2.69299 2.74605C5.22999 0.274552 8.77249 -0.119447 9.82399 2.18955C10.7305 4.18055 9.34549 6.88455 7.30549 8.65555C4.52149 11.0721 0.855992 9.91255 1.72899 7.86305C2.72349 8.91355 4.83399 8.48955 6.44249 6.91705C8.05099 5.34455 8.54849 3.21755 7.55399 2.16755C6.07099 0.601053 2.44999 2.39855 1.44049 5.23655C1.23449 4.36255 2.62199 2.81505 2.69299 2.74605ZM12.0515 3.78055C12.054 1.42155 10.298 -0.467947 6.93349 0.384053C6.85649 0.404552 6.78199 0.425052 6.71499 0.442053C6.78849 0.421052 6.86149 0.402052 6.93349 0.384053C15.4735 -1.90995 16.0995 7.04005 9.36299 12.2166C5.88549 14.8891 0.643492 14.048 0.660991 11.4501C4.45149 14.9796 12.046 8.93655 12.0515 3.78055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_21_4743">
                <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        <p>30-50% Cheaper than Microsoft Unified/Microsoft Premier Support</p>  
    </li>

    <li class="mad-UsContainer-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_21_4743)">
              <path d="M-2.09601 22.0961H22.0965V-2.09595H-2.09601V22.0961ZM8.84549 19.7571C8.99199 19.7621 9.15749 19.7645 9.32749 19.7651C9.16399 19.7691 9.00299 19.7666 8.84549 19.7571ZM19.331 9.63955C19.3445 10.1596 19.342 10.3566 19.3065 10.7236C18.695 15.9666 14.4945 19.4286 10.101 19.7561C10.0705 19.757 10.0415 19.7581 10.013 19.7591C9.12599 19.792 9.27299 19.889 10.013 19.7591C11.137 19.562 13.6275 18.8421 15.9375 16.5836C18.1235 14.4456 19.3275 11.8191 19.331 9.63955C19.328 9.53205 19.325 9.41205 19.321 9.27305C19.3285 9.39355 19.3315 9.51605 19.331 9.63955ZM17.5575 4.26755C17.912 4.78355 18.1825 5.16855 18.717 6.45105C19.69 9.06205 18.3825 12.9576 15.3025 15.9696C11.8965 19.3001 7.71549 20.6846 3.73249 17.9286C3.67549 17.8891 3.61999 17.8501 3.56899 17.8131C3.62249 17.8531 3.67699 17.8911 3.73249 17.9286C6.31799 19.6771 10.8585 18.5266 14.393 15.0711C17.966 11.5766 19.2615 6.94755 17.5575 4.26755C17.494 4.17505 17.4325 4.08655 17.3765 4.00505C17.44 4.09005 17.5005 4.17805 17.5575 4.26755ZM13.24 0.797553C14.5905 1.36955 15.4795 2.02705 15.9035 2.47455C18.2975 5.00255 17.1 10.1206 13.2285 13.906C9.30999 17.7376 2.92249 19.4261 1.09499 14.7661C3.38049 17.1791 8.22949 16.2056 11.925 12.5921C16.273 8.34055 16.961 2.51105 13.24 0.797553C13.148 0.758553 13.049 0.717052 12.941 0.671552C13.043 0.709553 13.142 0.752553 13.24 0.797553ZM2.69299 2.74605C5.22999 0.274552 8.77249 -0.119447 9.82399 2.18955C10.7305 4.18055 9.34549 6.88455 7.30549 8.65555C4.52149 11.0721 0.855992 9.91255 1.72899 7.86305C2.72349 8.91355 4.83399 8.48955 6.44249 6.91705C8.05099 5.34455 8.54849 3.21755 7.55399 2.16755C6.07099 0.601053 2.44999 2.39855 1.44049 5.23655C1.23449 4.36255 2.62199 2.81505 2.69299 2.74605ZM12.0515 3.78055C12.054 1.42155 10.298 -0.467947 6.93349 0.384053C6.85649 0.404552 6.78199 0.425052 6.71499 0.442053C6.78849 0.421052 6.86149 0.402052 6.93349 0.384053C15.4735 -1.90995 16.0995 7.04005 9.36299 12.2166C5.88549 14.8891 0.643492 14.048 0.660991 11.4501C4.45149 14.9796 12.046 8.93655 12.0515 3.78055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_21_4743">
                <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p>2x Faster Average Time To Resolution (and Financially-backed SLA’s!)</p>
    </li>

    <li class="mad-UsContainer-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_21_4743)">
              <path d="M-2.09601 22.0961H22.0965V-2.09595H-2.09601V22.0961ZM8.84549 19.7571C8.99199 19.7621 9.15749 19.7645 9.32749 19.7651C9.16399 19.7691 9.00299 19.7666 8.84549 19.7571ZM19.331 9.63955C19.3445 10.1596 19.342 10.3566 19.3065 10.7236C18.695 15.9666 14.4945 19.4286 10.101 19.7561C10.0705 19.757 10.0415 19.7581 10.013 19.7591C9.12599 19.792 9.27299 19.889 10.013 19.7591C11.137 19.562 13.6275 18.8421 15.9375 16.5836C18.1235 14.4456 19.3275 11.8191 19.331 9.63955C19.328 9.53205 19.325 9.41205 19.321 9.27305C19.3285 9.39355 19.3315 9.51605 19.331 9.63955ZM17.5575 4.26755C17.912 4.78355 18.1825 5.16855 18.717 6.45105C19.69 9.06205 18.3825 12.9576 15.3025 15.9696C11.8965 19.3001 7.71549 20.6846 3.73249 17.9286C3.67549 17.8891 3.61999 17.8501 3.56899 17.8131C3.62249 17.8531 3.67699 17.8911 3.73249 17.9286C6.31799 19.6771 10.8585 18.5266 14.393 15.0711C17.966 11.5766 19.2615 6.94755 17.5575 4.26755C17.494 4.17505 17.4325 4.08655 17.3765 4.00505C17.44 4.09005 17.5005 4.17805 17.5575 4.26755ZM13.24 0.797553C14.5905 1.36955 15.4795 2.02705 15.9035 2.47455C18.2975 5.00255 17.1 10.1206 13.2285 13.906C9.30999 17.7376 2.92249 19.4261 1.09499 14.7661C3.38049 17.1791 8.22949 16.2056 11.925 12.5921C16.273 8.34055 16.961 2.51105 13.24 0.797553C13.148 0.758553 13.049 0.717052 12.941 0.671552C13.043 0.709553 13.142 0.752553 13.24 0.797553ZM2.69299 2.74605C5.22999 0.274552 8.77249 -0.119447 9.82399 2.18955C10.7305 4.18055 9.34549 6.88455 7.30549 8.65555C4.52149 11.0721 0.855992 9.91255 1.72899 7.86305C2.72349 8.91355 4.83399 8.48955 6.44249 6.91705C8.05099 5.34455 8.54849 3.21755 7.55399 2.16755C6.07099 0.601053 2.44999 2.39855 1.44049 5.23655C1.23449 4.36255 2.62199 2.81505 2.69299 2.74605ZM12.0515 3.78055C12.054 1.42155 10.298 -0.467947 6.93349 0.384053C6.85649 0.404552 6.78199 0.425052 6.71499 0.442053C6.78849 0.421052 6.86149 0.402052 6.93349 0.384053C15.4735 -1.90995 16.0995 7.04005 9.36299 12.2166C5.88549 14.8891 0.643492 14.048 0.660991 11.4501C4.45149 14.9796 12.046 8.93655 12.0515 3.78055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_21_4743">
                <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p>All-American Team of Microsoft-Certified Engineers and Architects</p>
    </li>

    <li class="mad-UsContainer-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_21_4743)">
              <path d="M-2.09601 22.0961H22.0965V-2.09595H-2.09601V22.0961ZM8.84549 19.7571C8.99199 19.7621 9.15749 19.7645 9.32749 19.7651C9.16399 19.7691 9.00299 19.7666 8.84549 19.7571ZM19.331 9.63955C19.3445 10.1596 19.342 10.3566 19.3065 10.7236C18.695 15.9666 14.4945 19.4286 10.101 19.7561C10.0705 19.757 10.0415 19.7581 10.013 19.7591C9.12599 19.792 9.27299 19.889 10.013 19.7591C11.137 19.562 13.6275 18.8421 15.9375 16.5836C18.1235 14.4456 19.3275 11.8191 19.331 9.63955C19.328 9.53205 19.325 9.41205 19.321 9.27305C19.3285 9.39355 19.3315 9.51605 19.331 9.63955ZM17.5575 4.26755C17.912 4.78355 18.1825 5.16855 18.717 6.45105C19.69 9.06205 18.3825 12.9576 15.3025 15.9696C11.8965 19.3001 7.71549 20.6846 3.73249 17.9286C3.67549 17.8891 3.61999 17.8501 3.56899 17.8131C3.62249 17.8531 3.67699 17.8911 3.73249 17.9286C6.31799 19.6771 10.8585 18.5266 14.393 15.0711C17.966 11.5766 19.2615 6.94755 17.5575 4.26755C17.494 4.17505 17.4325 4.08655 17.3765 4.00505C17.44 4.09005 17.5005 4.17805 17.5575 4.26755ZM13.24 0.797553C14.5905 1.36955 15.4795 2.02705 15.9035 2.47455C18.2975 5.00255 17.1 10.1206 13.2285 13.906C9.30999 17.7376 2.92249 19.4261 1.09499 14.7661C3.38049 17.1791 8.22949 16.2056 11.925 12.5921C16.273 8.34055 16.961 2.51105 13.24 0.797553C13.148 0.758553 13.049 0.717052 12.941 0.671552C13.043 0.709553 13.142 0.752553 13.24 0.797553ZM2.69299 2.74605C5.22999 0.274552 8.77249 -0.119447 9.82399 2.18955C10.7305 4.18055 9.34549 6.88455 7.30549 8.65555C4.52149 11.0721 0.855992 9.91255 1.72899 7.86305C2.72349 8.91355 4.83399 8.48955 6.44249 6.91705C8.05099 5.34455 8.54849 3.21755 7.55399 2.16755C6.07099 0.601053 2.44999 2.39855 1.44049 5.23655C1.23449 4.36255 2.62199 2.81505 2.69299 2.74605ZM12.0515 3.78055C12.054 1.42155 10.298 -0.467947 6.93349 0.384053C6.85649 0.404552 6.78199 0.425052 6.71499 0.442053C6.78849 0.421052 6.86149 0.402052 6.93349 0.384053C15.4735 -1.90995 16.0995 7.04005 9.36299 12.2166C5.88549 14.8891 0.643492 14.048 0.660991 11.4501C4.45149 14.9796 12.046 8.93655 12.0515 3.78055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_21_4743">
                <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p>Dedicated TAM for every Account</p>
    </li>

    
    <li class="mad-UsContainer-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#clip0_21_4743)">
              <path d="M-2.09601 22.0961H22.0965V-2.09595H-2.09601V22.0961ZM8.84549 19.7571C8.99199 19.7621 9.15749 19.7645 9.32749 19.7651C9.16399 19.7691 9.00299 19.7666 8.84549 19.7571ZM19.331 9.63955C19.3445 10.1596 19.342 10.3566 19.3065 10.7236C18.695 15.9666 14.4945 19.4286 10.101 19.7561C10.0705 19.757 10.0415 19.7581 10.013 19.7591C9.12599 19.792 9.27299 19.889 10.013 19.7591C11.137 19.562 13.6275 18.8421 15.9375 16.5836C18.1235 14.4456 19.3275 11.8191 19.331 9.63955C19.328 9.53205 19.325 9.41205 19.321 9.27305C19.3285 9.39355 19.3315 9.51605 19.331 9.63955ZM17.5575 4.26755C17.912 4.78355 18.1825 5.16855 18.717 6.45105C19.69 9.06205 18.3825 12.9576 15.3025 15.9696C11.8965 19.3001 7.71549 20.6846 3.73249 17.9286C3.67549 17.8891 3.61999 17.8501 3.56899 17.8131C3.62249 17.8531 3.67699 17.8911 3.73249 17.9286C6.31799 19.6771 10.8585 18.5266 14.393 15.0711C17.966 11.5766 19.2615 6.94755 17.5575 4.26755C17.494 4.17505 17.4325 4.08655 17.3765 4.00505C17.44 4.09005 17.5005 4.17805 17.5575 4.26755ZM13.24 0.797553C14.5905 1.36955 15.4795 2.02705 15.9035 2.47455C18.2975 5.00255 17.1 10.1206 13.2285 13.906C9.30999 17.7376 2.92249 19.4261 1.09499 14.7661C3.38049 17.1791 8.22949 16.2056 11.925 12.5921C16.273 8.34055 16.961 2.51105 13.24 0.797553C13.148 0.758553 13.049 0.717052 12.941 0.671552C13.043 0.709553 13.142 0.752553 13.24 0.797553ZM2.69299 2.74605C5.22999 0.274552 8.77249 -0.119447 9.82399 2.18955C10.7305 4.18055 9.34549 6.88455 7.30549 8.65555C4.52149 11.0721 0.855992 9.91255 1.72899 7.86305C2.72349 8.91355 4.83399 8.48955 6.44249 6.91705C8.05099 5.34455 8.54849 3.21755 7.55399 2.16755C6.07099 0.601053 2.44999 2.39855 1.44049 5.23655C1.23449 4.36255 2.62199 2.81505 2.69299 2.74605ZM12.0515 3.78055C12.054 1.42155 10.298 -0.467947 6.93349 0.384053C6.85649 0.404552 6.78199 0.425052 6.71499 0.442053C6.78849 0.421052 6.86149 0.402052 6.93349 0.384053C15.4735 -1.90995 16.0995 7.04005 9.36299 12.2166C5.88549 14.8891 0.643492 14.048 0.660991 11.4501C4.45149 14.9796 12.046 8.93655 12.0515 3.78055Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_21_4743">
                <rect width="20" height="20" rx="10" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <p>24/7 Customer and Engineering Support</p>
    </li>
</ul>

<div class="mad-UsContainer-button">
    <button class="mad-UsContainer-button-text">Schedule a Call</button>
</div>

<div class="mad-UsContainer-query">
    <p>Need more details first? Let us know your needs <a href="#">here</a></p>
</div>`
const componentTeaserColumnsContainer =  document.querySelector(".componentTeaserColumnsContainer")
document.querySelector(".componentSplashContent").append( componentTeaserColumnsContainer)


const newButton = document.createElement("div")
newButton.setAttribute("class" , "componentTeaserColumnsContainer-button")
newButton.innerHTML= `<button class="componentTeaserColumnsContainer-button-text">US Cloud vs. Microsoft</button>`
document.querySelector(".componentTeaserColumnsContainer").append(newButton)


document.querySelector(".brandsTitle").textContent = `We’ve replaced Unified Support for 6+ million Microsoft users`


const newDiv = document.createElement("div")
newDiv.setAttribute("class" , "componentComparisonChartContainer-mad")
newDiv.innerHTML = `<div class="componentComparisonChartContainer-information">
<h1 class="information-t1"><span> US Cloud:</span>The Global Leader in Third-Party Microsoft Enterprise Support</h1>
<p class="information-t2">Save 30-50% on a complete replacement for Microsoft Premier & Unified Support.</p>
<p class="information-t3">Enterprises worldwide are replacing Microsoft with US Cloud to save 30-50% on support costs. We support the entire Microsoft stack and have financially-backed SLAs for guaranteed response times and managed Microsoft escalations when needed.</p>
</div>

<div class="componentComparisonChartContainer-button">
<button class="componentComparisonChartContainer-button-text">US Cloud Microsoft Support</button>
</div>`
document.querySelector(".componentComparisonChartContainer").prepend(newDiv)


var sourceElement = document.querySelector(".componentTeaserColumnsContainer");
var targetElement = document.querySelector(".componentBrandsContainer");
var clonedElement = sourceElement.cloneNode(true);
targetElement.insertBefore(clonedElement, targetElement.firstChild);
  },
  () => document.querySelectorAll('.componentSplashContent').length > 0,
  () => document.querySelectorAll('.componentTeaserColumnsContainer').length > 0,
  () => document.querySelectorAll('.brandsTitle').length > 0,
  () => document.querySelectorAll('.componentComparisonChartContainer').length > 0
);