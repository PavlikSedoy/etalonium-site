import React, {Component} from 'react';
import './What.scss'

// import { CSSTransition } from 'react-transition-group'

class What extends Component {
    state = {
        whoItems: [
            {
                title: 'Verifications',
                icon: (<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M48.3392 43.3405V10.0104H37.2509C35.8734 3.24287 29.279 -1.12236 22.5088 0.254591C17.585 1.25068 13.7456 5.09834 12.7491 10.0104H1.67057V43.3308H0V50.0007H50V43.3405H48.3392ZM17.1747 5.01045C19.2165 2.88154 22.0496 1.67061 25 1.68037C30.9789 1.67061 35.8245 6.51436 35.8343 12.4812C35.8343 15.4304 34.6327 18.2624 32.5029 20.3034V15.8405C32.5029 13.3796 30.6956 11.28 28.263 10.9089C28.8492 10.1862 29.1618 9.27803 29.1716 8.35029C29.1716 6.04561 27.3056 4.18037 25 4.18037C22.6944 4.18037 20.8284 6.04561 20.8284 8.35029C20.8284 9.27803 21.1508 10.1862 21.737 10.9089C19.2946 11.28 17.4971 13.3796 17.4971 15.8405V20.3132C13.1887 16.1726 13.0422 9.32686 17.1747 5.01045ZM27.501 16.6804V23.0378C25.8597 23.4382 24.1403 23.4382 22.499 23.0378V16.6804H20.8284V22.5104C20.2521 22.2663 19.6854 21.9733 19.1579 21.6315V15.8503C19.1579 14.0144 20.6526 12.5202 22.4893 12.5202H27.4912C29.3279 12.5202 30.8226 14.0144 30.8226 15.8503V21.6315C30.295 21.9733 29.7382 22.2761 29.152 22.5202V16.6901H27.501V16.6804ZM22.499 8.35029C22.499 6.97334 23.6225 5.85029 25 5.85029C26.3775 5.85029 27.501 6.97334 27.501 8.35029C27.501 9.72725 26.3775 10.8503 25 10.8503C23.6225 10.8503 22.499 9.72725 22.499 8.35029ZM17.4971 22.4812V22.5007H17.5264C21.9519 25.8308 28.0383 25.8308 32.4639 22.5007H32.4932V22.4812C34.9355 20.655 36.6256 17.9987 37.2411 15.0104H43.3275V38.3405H6.66276V15.0104H12.7491C13.3744 17.9987 15.0547 20.655 17.4971 22.4812ZM3.33138 11.6804H12.544C12.5244 11.9538 12.5049 12.2272 12.5049 12.5105C12.5049 12.7937 12.5244 13.0671 12.544 13.3405H5.00195V40.0007H45.0078V13.3405H37.4658C37.4853 13.0671 37.5049 12.7937 37.5049 12.5105C37.5049 12.2272 37.4853 11.9538 37.4658 11.6804H46.6784V43.3405H32.5127C32.288 43.3405 32.0828 43.4284 31.9265 43.5847L30.5002 45.0104H19.5096L18.0832 43.5847C17.9269 43.4284 17.712 43.3405 17.4971 43.3405H3.33138V11.6804ZM48.3392 48.3308H1.67057V45.0007H17.1649L18.5912 46.4265C18.7476 46.5827 18.9625 46.6706 19.1774 46.6706H30.8421C31.0668 46.6706 31.272 46.5827 31.4283 46.4265L32.8546 45.0007H48.349V48.3308H48.3392ZM25.8402 41.6706H24.1696V43.3405H25.8402V41.6706ZM24.9707 36.2702L32.1219 29.112L30.9496 27.9304L24.9707 33.9167L21.9617 30.9089L20.7796 32.0905L24.9707 36.2702Z" fill="#CECECE"/></g><defs><clipPath id="clip0"><rect width="50" height="50" fill="white"/></clipPath></defs></svg>),
                text: 'Each user, customer and model receive a confirmation within the platform. We have protected you from dubious contracts, sexual harassment and fraudulent agencies!',
                isOpen: true
            },
            {
                title: 'Social lift',
                icon: (<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M34.858 34.8561C34.4608 34.8561 34.0756 34.964 33.7506 35.1439C33.6062 34.0288 32.6432 33.1775 31.4757 33.1775C31.0785 33.1775 30.6933 33.2854 30.3683 33.4652C30.2239 32.3501 29.261 31.4988 28.0934 31.4988C27.6962 31.4988 27.3351 31.5947 27.0101 31.7746V28.789C27.0101 27.542 25.987 26.5108 24.7232 26.5108C23.4714 26.5108 22.4362 27.53 22.4362 28.789V40.2398L18.4882 37.3741C17.441 36.5827 15.9364 36.6906 15.0096 37.6259C14.3115 38.3213 14.3115 39.4484 15.0096 40.1559L22.9779 48.0935C24.2176 49.3285 25.8666 50.012 27.624 50.012H30.2841C32.0414 50.012 33.6784 49.3285 34.9182 48.0935C36.0737 46.9424 36.7598 45.4077 36.832 43.777L37.1449 37.1343C37.1449 35.8753 36.1218 34.8561 34.858 34.8561ZM35.6404 43.717C35.5802 45.048 35.0144 46.307 34.0756 47.2422C33.0645 48.2494 31.7164 48.813 30.2841 48.813H27.624C26.1916 48.813 24.8435 48.2614 23.8204 47.2422L15.8522 39.3046C15.6235 39.0767 15.6235 38.693 15.8522 38.4652C16.3698 37.9496 17.1883 37.8897 17.778 38.3333L22.6769 41.8945C22.8575 42.0264 23.0982 42.0504 23.3028 41.9424C23.5075 41.8465 23.6278 41.6307 23.6278 41.4149V28.789C23.6278 28.1894 24.1213 27.7098 24.7232 27.7098C25.0241 27.7098 25.3009 27.8297 25.4935 28.0336C25.6861 28.2254 25.8065 28.5012 25.8065 28.801V37.2182C25.8065 37.542 26.0713 37.8177 26.4083 37.8177C26.5768 37.8177 26.7212 37.7458 26.8296 37.6379C26.9379 37.53 27.0101 37.3861 27.0101 37.2182V33.777C27.0101 33.1775 27.4916 32.6978 28.1054 32.6978C28.7073 32.6978 29.1887 33.1894 29.1887 33.777V37.2182C29.1887 37.542 29.4535 37.8177 29.7906 37.8177C29.9591 37.8177 30.1035 37.7458 30.2118 37.6379C30.3202 37.53 30.3924 37.3861 30.3924 37.2182V35.4676C30.3924 34.8681 30.8739 34.3885 31.4877 34.3885C32.0896 34.3885 32.571 34.8801 32.571 35.4676V37.2302C32.5831 37.554 32.8479 37.8058 33.1728 37.8058C33.4978 37.8058 33.7747 37.542 33.7747 37.2062V37.1343C33.7747 36.8465 33.883 36.5707 34.0876 36.3669C34.2923 36.1631 34.5691 36.0552 34.87 36.0552C35.4718 36.0552 35.9533 36.5468 35.9533 37.1103L35.6404 43.717ZM20.9437 12.4221L25 10.2998L29.0563 12.4221L28.286 7.92566L31.5599 4.73621L27.0342 4.07674L25 0L22.9779 4.08873L18.4521 4.7482L21.726 7.93765L20.9437 12.4221ZM16.2013 15.1079L11.6755 14.4604L9.64131 10.3597L7.61916 14.4484L3.08137 15.1079L6.35532 18.2974L5.58498 22.7938L9.64131 20.6715L13.6976 22.7938L12.9273 18.2974L16.2013 15.1079ZM10.195 19.6163L9.64131 19.3285L9.08763 19.6163L7.16177 20.6235L7.52287 18.4892L7.6312 17.8777L7.18585 17.446L5.63312 15.9353L7.77564 15.6235L8.3895 15.5396L8.66635 14.976L9.62927 13.0336L10.5922 14.976L10.869 15.5396L11.4829 15.6235L13.6254 15.9353L12.0727 17.446L11.6273 17.8777L11.7357 18.4892L12.0968 20.6235L10.195 19.6163ZM36.3024 22.7938L40.3587 20.6715L44.415 22.7938L43.6447 18.2974L46.9186 15.1079L42.3929 14.4484L40.3707 10.3597L38.3486 14.4484L33.8228 15.1079L37.0968 18.2974L36.3024 22.7938ZM36.3505 15.9353L38.493 15.6235L39.1069 15.5396L39.3837 14.976L40.3467 13.0336L41.3096 14.976L41.5864 15.5396L42.2003 15.6235L44.3428 15.9353L42.7901 17.446L42.3447 17.8777L42.4531 18.4892L42.8142 20.6235L40.8883 19.6163L40.3346 19.3285L39.7809 19.6163L37.8551 20.6235L38.2162 18.4892L38.3245 17.8777L37.8792 17.446L36.3505 15.9353ZM50 31.247L45.4742 30.5875L43.4401 26.4988L41.4179 30.5875L36.8922 31.247L40.1661 34.4365L39.3958 38.9329L43.4521 36.8106L47.5084 38.9329L46.7381 34.4365L50 31.247ZM43.9937 35.7554L43.4401 35.4676L42.8864 35.7554L40.9605 36.7626L41.3216 34.6283L41.43 34.0168L40.9846 33.5851L39.4319 32.0743L41.5744 31.7626L42.1883 31.6787L42.4651 31.1151L43.428 29.1727L44.3909 31.1151L44.6678 31.6787L45.2817 31.7626L47.4242 32.0743L45.8715 33.5851L45.4261 34.0168L45.5344 34.6283L45.8955 36.7626L43.9937 35.7554ZM8.58209 30.5875L6.55994 26.4988L4.5378 30.5875L0 31.247L3.27395 34.4365L2.50361 38.9329L6.55994 36.8106L10.6163 38.9329L9.84593 34.4365L13.1199 31.247L8.58209 30.5875ZM8.66635 34.6283L9.02744 36.7626L7.10159 35.7554L6.54791 35.4676L5.99422 35.7554L4.06837 36.7626L4.42947 34.6283L4.5378 34.0168L4.09244 33.5851L2.53972 32.0743L4.68223 31.7626L5.2961 31.6787L5.57294 31.1151L6.53587 29.1727L7.4988 31.1151L7.77564 31.6787L8.3895 31.7626L10.532 32.0743L8.9793 33.5851L8.53394 34.0168L8.66635 34.6283Z" fill="#CECECE"/></g><defs><clipPath id="clip0"><rect width="50" height="50" fill="white"/></clipPath></defs></svg>),
                text: 'You do not have to born successful and rich, you can become success very quickly. Users and producers from all around the world are ready to support and invest in your career right now.',
                isOpen: false
            },
            {
                title: 'Rating system of competitions',
                icon: (<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M34.858 34.8561C34.4608 34.8561 34.0756 34.964 33.7506 35.1439C33.6062 34.0288 32.6432 33.1775 31.4757 33.1775C31.0785 33.1775 30.6933 33.2854 30.3683 33.4652C30.2239 32.3501 29.261 31.4988 28.0934 31.4988C27.6962 31.4988 27.3351 31.5947 27.0101 31.7746V28.789C27.0101 27.542 25.987 26.5108 24.7232 26.5108C23.4714 26.5108 22.4362 27.53 22.4362 28.789V40.2398L18.4882 37.3741C17.441 36.5827 15.9364 36.6906 15.0096 37.6259C14.3115 38.3213 14.3115 39.4484 15.0096 40.1559L22.9779 48.0935C24.2176 49.3285 25.8666 50.012 27.624 50.012H30.2841C32.0414 50.012 33.6784 49.3285 34.9182 48.0935C36.0737 46.9424 36.7598 45.4077 36.832 43.777L37.1449 37.1343C37.1449 35.8753 36.1218 34.8561 34.858 34.8561ZM35.6404 43.717C35.5802 45.048 35.0144 46.307 34.0756 47.2422C33.0645 48.2494 31.7164 48.813 30.2841 48.813H27.624C26.1916 48.813 24.8435 48.2614 23.8204 47.2422L15.8522 39.3046C15.6235 39.0767 15.6235 38.693 15.8522 38.4652C16.3698 37.9496 17.1883 37.8897 17.778 38.3333L22.6769 41.8945C22.8575 42.0264 23.0982 42.0504 23.3028 41.9424C23.5075 41.8465 23.6278 41.6307 23.6278 41.4149V28.789C23.6278 28.1894 24.1213 27.7098 24.7232 27.7098C25.0241 27.7098 25.3009 27.8297 25.4935 28.0336C25.6861 28.2254 25.8065 28.5012 25.8065 28.801V37.2182C25.8065 37.542 26.0713 37.8177 26.4083 37.8177C26.5768 37.8177 26.7212 37.7458 26.8296 37.6379C26.9379 37.53 27.0101 37.3861 27.0101 37.2182V33.777C27.0101 33.1775 27.4916 32.6978 28.1054 32.6978C28.7073 32.6978 29.1887 33.1894 29.1887 33.777V37.2182C29.1887 37.542 29.4535 37.8177 29.7906 37.8177C29.9591 37.8177 30.1035 37.7458 30.2118 37.6379C30.3202 37.53 30.3924 37.3861 30.3924 37.2182V35.4676C30.3924 34.8681 30.8739 34.3885 31.4877 34.3885C32.0896 34.3885 32.571 34.8801 32.571 35.4676V37.2302C32.5831 37.554 32.8479 37.8058 33.1728 37.8058C33.4978 37.8058 33.7747 37.542 33.7747 37.2062V37.1343C33.7747 36.8465 33.883 36.5707 34.0876 36.3669C34.2923 36.1631 34.5691 36.0552 34.87 36.0552C35.4718 36.0552 35.9533 36.5468 35.9533 37.1103L35.6404 43.717ZM20.9437 12.4221L25 10.2998L29.0563 12.4221L28.286 7.92566L31.5599 4.73621L27.0342 4.07674L25 0L22.9779 4.08873L18.4521 4.7482L21.726 7.93765L20.9437 12.4221ZM16.2013 15.1079L11.6755 14.4604L9.64131 10.3597L7.61916 14.4484L3.08137 15.1079L6.35532 18.2974L5.58498 22.7938L9.64131 20.6715L13.6976 22.7938L12.9273 18.2974L16.2013 15.1079ZM10.195 19.6163L9.64131 19.3285L9.08763 19.6163L7.16177 20.6235L7.52287 18.4892L7.6312 17.8777L7.18585 17.446L5.63312 15.9353L7.77564 15.6235L8.3895 15.5396L8.66635 14.976L9.62927 13.0336L10.5922 14.976L10.869 15.5396L11.4829 15.6235L13.6254 15.9353L12.0727 17.446L11.6273 17.8777L11.7357 18.4892L12.0968 20.6235L10.195 19.6163ZM36.3024 22.7938L40.3587 20.6715L44.415 22.7938L43.6447 18.2974L46.9186 15.1079L42.3929 14.4484L40.3707 10.3597L38.3486 14.4484L33.8228 15.1079L37.0968 18.2974L36.3024 22.7938ZM36.3505 15.9353L38.493 15.6235L39.1069 15.5396L39.3837 14.976L40.3467 13.0336L41.3096 14.976L41.5864 15.5396L42.2003 15.6235L44.3428 15.9353L42.7901 17.446L42.3447 17.8777L42.4531 18.4892L42.8142 20.6235L40.8883 19.6163L40.3346 19.3285L39.7809 19.6163L37.8551 20.6235L38.2162 18.4892L38.3245 17.8777L37.8792 17.446L36.3505 15.9353ZM50 31.247L45.4742 30.5875L43.4401 26.4988L41.4179 30.5875L36.8922 31.247L40.1661 34.4365L39.3958 38.9329L43.4521 36.8106L47.5084 38.9329L46.7381 34.4365L50 31.247ZM43.9937 35.7554L43.4401 35.4676L42.8864 35.7554L40.9605 36.7626L41.3216 34.6283L41.43 34.0168L40.9846 33.5851L39.4319 32.0743L41.5744 31.7626L42.1883 31.6787L42.4651 31.1151L43.428 29.1727L44.3909 31.1151L44.6678 31.6787L45.2817 31.7626L47.4242 32.0743L45.8715 33.5851L45.4261 34.0168L45.5344 34.6283L45.8955 36.7626L43.9937 35.7554ZM8.58209 30.5875L6.55994 26.4988L4.5378 30.5875L0 31.247L3.27395 34.4365L2.50361 38.9329L6.55994 36.8106L10.6163 38.9329L9.84593 34.4365L13.1199 31.247L8.58209 30.5875ZM8.66635 34.6283L9.02744 36.7626L7.10159 35.7554L6.54791 35.4676L5.99422 35.7554L4.06837 36.7626L4.42947 34.6283L4.5378 34.0168L4.09244 33.5851L2.53972 32.0743L4.68223 31.7626L5.2961 31.6787L5.57294 31.1151L6.53587 29.1727L7.4988 31.1151L7.77564 31.6787L8.3895 31.7626L10.532 32.0743L8.9793 33.5851L8.53394 34.0168L8.66635 34.6283Z" fill="#CECECE"/></g><defs><clipPath id="clip0"><rect width="50" height="50" fill="white"/></clipPath></defs></svg>),
                text: 'Your success and rating in the fashion world depends on how many people trust you, how much contracts you execute and how often you sharing your achievements with subscribers in the application.',
                isOpen: false
            },
            {
                title: 'Stayble coin',
                icon: (<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.3647 20.9059V16.9176H26.3765C28.0235 17.2118 29.5412 18 30.7294 19.1882L30.8118 19.2706L31.2588 19.7176L31.7059 19.2706L32.6235 18.3529L32.7176 18.2588L33.1529 17.8235C33.0353 17.6824 32.9059 17.5412 32.7765 17.4118C32.6588 17.2824 32.5412 17.1647 32.4118 17.0588C32.3529 17 32.2941 16.9529 32.2353 16.8941C32.1412 16.8118 32.0471 16.7294 31.9529 16.6471L31.6706 16.4118C31.2471 16.0706 30.7882 15.7647 30.3176 15.5059C30.2941 15.4941 30.2588 15.4706 30.2235 15.4471L29.9882 15.3176C29.6941 15.1529 29.3765 15.0118 29.0706 14.8941C29 14.8706 28.9294 14.8353 28.8588 14.8118C28.2471 14.5765 27.6118 14.4 26.9529 14.2706L26.7176 14.2353C26.6 14.2118 26.4941 14.2 26.3647 14.1765C26.2941 14.1647 26.2353 14.1529 26.1647 14.1529C26.1059 14.1412 26.0471 14.1412 25.9765 14.1294C25.9059 14.1176 25.8471 14.1176 25.7765 14.1059C25.7412 14.1059 25.7059 14.1059 25.6706 14.0941C25.6353 14.0941 25.5882 14.0824 25.5529 14.0824C25.4941 14.0824 25.4471 14.0706 25.3882 14.0706C25.2471 14.0706 25.1176 14.0588 24.9765 14.0588C24.8706 14.0588 24.7647 14.0588 24.6706 14.0588C24.5059 14.0588 24.3412 14.0706 24.1765 14.0824C24.1647 14.0824 24.1529 14.0824 24.1529 14.0824C23.9647 14.0941 23.7882 14.1176 23.6 14.1412C23.4353 14.1647 23.2706 14.1882 23.1059 14.2118C22.8941 14.2471 22.6941 14.2941 22.4941 14.3412C22.2471 14.4 22 14.4706 21.7529 14.5412C21.3294 14.6706 20.9176 14.8235 20.5176 15.0118C20.3529 15.0824 20.2 15.1529 20.0471 15.2353C19.9647 15.2706 19.8941 15.3176 19.8118 15.3529C19.7294 15.4 19.6471 15.4471 19.5529 15.4941C19.4824 15.5294 19.4235 15.5765 19.3529 15.6118C19.2824 15.6588 19.2 15.7059 19.1294 15.7529C19.0588 15.8 18.9882 15.8471 18.9176 15.8941C18.8353 15.9529 18.7529 16 18.6824 16.0588C18.6235 16.1059 18.5529 16.1529 18.4941 16.2C18.4235 16.2588 18.3529 16.3059 18.2824 16.3647C18.1529 16.4588 18.0353 16.5647 17.9059 16.6706C17.8941 16.6824 17.8824 16.6941 17.8706 16.7059C17.7412 16.8118 17.6235 16.9176 17.5059 17.0471C17.4471 17.1059 17.3765 17.1647 17.3176 17.2235C17.2 17.3529 17.0824 17.4706 16.9647 17.6C16.8471 17.7294 16.7294 17.8588 16.6235 18C16.5765 18.0588 16.5294 18.1176 16.4824 18.1647C16.3647 18.3176 16.2471 18.4588 16.1412 18.6118C16.0941 18.6824 16.0471 18.7529 15.9882 18.8235C15.9412 18.8941 15.8941 18.9765 15.8471 19.0471C15.8 19.1176 15.7529 19.2 15.7059 19.2706C15.6588 19.3412 15.6235 19.4 15.5882 19.4706C15.5412 19.5529 15.4941 19.6353 15.4471 19.7176C15.4 19.7882 15.3647 19.8706 15.3294 19.9529C15.1647 20.2588 15.0235 20.5882 14.8941 20.9176C14.8588 21 14.8353 21.0824 14.8 21.1647C14.7059 21.4118 14.6235 21.6706 14.5529 21.9294C14.5294 22 14.5176 22.0588 14.4941 22.1294C14.4824 22.1765 14.4706 22.2118 14.4588 22.2588C14.4353 22.3412 14.4118 22.4353 14.4 22.5176C14.3294 22.8471 14.2706 23.1882 14.2235 23.5294C14.2 23.6824 14.1882 23.8353 14.1765 23.9882C14.1765 24.0235 14.1647 24.0706 14.1647 24.1059C14.1647 24.1412 14.1529 24.1765 14.1529 24.2C14.1412 24.3294 14.1412 24.4706 14.1294 24.6C14.1294 24.7059 14.1294 24.8118 14.1294 24.9059C14.1294 25.0118 14.1294 25.1176 14.1294 25.2118C14.1294 25.3529 14.1412 25.4824 14.1529 25.6118C14.1529 25.6471 14.1529 25.6824 14.1647 25.7059L14.1765 25.8235C14.1882 25.9765 14.2118 26.1294 14.2235 26.2824C14.2471 26.4588 14.2706 26.6471 14.3059 26.8235C14.3294 26.9176 14.3412 27 14.3529 27.0941C14.3882 27.2824 14.4353 27.4706 14.4824 27.6471C14.5294 27.8118 14.5765 27.9765 14.6235 28.1412C14.6471 28.2235 14.6824 28.3059 14.7059 28.3882C14.8118 28.7176 14.9412 29.0588 15.0941 29.3765C15.1294 29.4588 15.1647 29.5412 15.2118 29.6118C15.5765 30.3882 16.0471 31.1176 16.6 31.7882C16.6118 31.8 16.6118 31.8118 16.6235 31.8118C16.8353 32.0824 17.0706 32.3412 17.3294 32.5882C17.3882 32.6471 17.4588 32.7059 17.5176 32.7647C17.6353 32.8706 17.7412 32.9882 17.8706 33.0824C17.9412 33.1529 18.0235 33.2235 18.1059 33.2824C18.1529 33.3176 18.1882 33.3529 18.2353 33.3882C18.4588 33.5647 18.6941 33.7412 18.9412 33.9059C19 33.9529 19.0588 33.9882 19.1294 34.0235C19.3647 34.1765 19.6 34.3176 19.8353 34.4471C20.6118 34.8706 21.4353 35.2 22.2941 35.4118C22.3765 35.4353 22.4706 35.4588 22.5529 35.4824C22.6353 35.5059 22.7294 35.5176 22.8118 35.5412C22.9176 35.5647 23.0235 35.5765 23.1294 35.6C23.2941 35.6235 23.4588 35.6471 23.6235 35.6706C23.6353 35.6706 23.6471 35.6706 23.6588 35.6824C23.8235 35.7059 24 35.7176 24.1647 35.7294C24.1765 35.7294 24.1765 35.7294 24.1882 35.7294C24.3529 35.7412 24.5176 35.7529 24.6824 35.7529C24.7882 35.7529 24.8941 35.7529 24.9882 35.7529C25.1294 35.7529 25.2588 35.7529 25.4 35.7412C25.4706 35.7412 25.5412 35.7294 25.6118 35.7294C25.6353 35.7294 25.6588 35.7294 25.6824 35.7294L25.7765 35.7176C25.8353 35.7176 25.8941 35.7176 25.9647 35.7059C26.1647 35.6824 26.3529 35.6706 26.5176 35.6471C26.5765 35.6353 26.6471 35.6235 26.7059 35.6118L27.0118 35.5647C27.0471 35.5529 27.0824 35.5529 27.1294 35.5412C27.1647 35.5294 27.2 35.5176 27.2353 35.5176L27.3294 35.4941C27.3647 35.4824 27.4 35.4706 27.4353 35.4706C28.0118 35.3294 28.5647 35.1529 29.1059 34.9294L29.1765 34.8941C29.2588 34.8588 29.3294 34.8235 29.4 34.8C29.6118 34.7059 29.8118 34.6118 30.0118 34.5059L30.2471 34.3882C30.2588 34.3765 30.2824 34.3765 30.2941 34.3647C30.3059 34.3529 30.3176 34.3529 30.3294 34.3412C30.6588 34.1529 30.9765 33.9529 31.2941 33.7294L31.4706 33.6C31.5176 33.5647 31.5529 33.5412 31.6 33.5059C31.6471 33.4706 31.6941 33.4353 31.7529 33.3882L31.9765 33.2C32.0471 33.1412 32.1294 33.0706 32.2 33V33.0118C32.4353 32.8 32.6588 32.5765 32.8824 32.3529C32.9765 32.2471 33.0824 32.1412 33.1765 32.0353L32.8824 31.7412V31.7294L31.2824 30.1294L30.7529 30.6588C29.5647 31.8588 28.0471 32.6353 26.4 32.9294V29H23.6471V32.9412H23.6235C21.9529 32.6588 20.4118 31.8706 19.2118 30.6588C18.0118 29.4588 17.2235 27.9294 16.9412 26.2706H29.0941V23.5647H16.9294V23.5176C17.2118 21.8588 18 20.3059 19.2 19.1059C20.4 17.8941 21.9529 17.0941 23.6235 16.8235H23.6471V20.8235H26.3647V20.9059ZM25 0C11.1882 0 0 11.1882 0 25C0 38.8118 11.1882 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM48.4824 24.2824H45.8588C45.7765 21.9412 45.3176 19.6941 44.5294 17.6118L46.9412 16.6C47.8588 19 48.4 21.5765 48.4824 24.2824ZM46.3765 15.2353L43.9647 16.2471C43.0353 14.2235 41.7882 12.3882 40.2941 10.7765L42.1412 8.92941C43.8706 10.7765 45.3059 12.9059 46.3765 15.2353ZM34.5647 3.52941C36.9765 4.61176 39.1765 6.09412 41.0824 7.88235L39.2353 9.72941C37.5765 8.17647 35.6706 6.89412 33.5765 5.95294L34.5647 3.52941ZM25.7412 1.51765C28.3647 1.6 30.8706 2.10588 33.2 2.98824L32.2118 5.41176C30.1765 4.65882 28.0118 4.22353 25.7412 4.14118V1.51765ZM24.2588 1.51765V4.14118C21.9176 4.22353 19.6706 4.69412 17.5882 5.48235L16.5765 3.07059C18.9765 2.14118 21.5529 1.6 24.2588 1.51765ZM15.2118 3.63529L16.2235 6.04706C14.2 6.98824 12.3647 8.23529 10.7529 9.72941L8.90588 7.88235C10.7529 6.15294 12.8824 4.70588 15.2118 3.63529ZM7.87059 8.92941L9.71765 10.7765C8.17647 12.4353 6.89412 14.3412 5.95294 16.4353L3.52941 15.4471C4.6 13.0353 6.08235 10.8353 7.87059 8.92941ZM2.97647 16.8235L5.4 17.8118C4.65882 19.8353 4.22353 22.0118 4.14118 24.2824H1.51765C1.58824 21.6588 2.10588 19.1647 2.97647 16.8235ZM1.51765 25.7529H4.14118C4.22353 28.0941 4.69412 30.3412 5.48235 32.4235L3.07059 33.4353C2.14118 31.0353 1.6 28.4588 1.51765 25.7529ZM3.64706 34.8L6.05882 33.7882C7 35.8 8.23529 37.6353 9.74118 39.2471L7.88235 41.0941C6.15294 39.2471 4.71765 37.1294 3.64706 34.8ZM15.4471 46.4706C13.0353 45.3882 10.8471 43.9176 8.94118 42.1294L10.7882 40.2824C12.4471 41.8235 14.3529 43.1059 16.4353 44.0471L15.4471 46.4706ZM24.2588 48.4824C21.6471 48.4 19.1412 47.8941 16.8118 47.0235L17.8 44.6C19.8235 45.3412 21.9882 45.7765 24.2588 45.8588V48.4824ZM5.57647 25C5.57647 14.2941 14.2941 5.57647 25 5.57647C35.7059 5.57647 44.4235 14.2941 44.4235 25C44.4235 35.7059 35.7059 44.4235 25 44.4235C14.2941 44.4235 5.57647 35.7059 5.57647 25ZM25.7412 48.4824V45.8588C28.0824 45.7765 30.3176 45.3176 32.4 44.5176L33.4118 46.9412C31.0118 47.8588 28.4353 48.4 25.7412 48.4824ZM34.7765 46.3647L33.7647 43.9529C35.7765 43.0235 37.6118 41.7765 39.2235 40.2824L41.0706 42.1294C39.2235 43.8588 37.1059 45.2941 34.7765 46.3647ZM42.1059 41.0941L40.2588 39.2471C41.8 37.5882 43.0824 35.6941 44.0353 33.6L46.4588 34.5882C45.3765 36.9882 43.8941 39.1882 42.1059 41.0941ZM47.0118 33.2118L44.5882 32.2235C45.3412 30.2 45.7765 28.0235 45.8588 25.7647H48.4824C48.4 28.3765 47.8824 30.8706 47.0118 33.2118Z" fill="#CECECE"/></svg>),
                text: 'Pay for model work, purchase new designer collections, promote young talents and influence the world rating in the fashion industry - possible thanks to a stable  Etalonium Coin, which is equal to $ 1 US.',
                isOpen: false
            },
{
                title: 'Blockchain',
                icon: (<svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33008 8.33008H7.5H8.33008V3.33008H3.33008V8.33008ZM5 5H6.66992V6.66992H5V5ZM41.6699 3.33008V8.33008H45.8398H46.6699V3.33008H41.6699ZM43.3301 5H45V6.66992H43.3301V5ZM50 11.6699V0H38.3301V5H29.1602V15.8301H15.8301V24.1602H6.66992V11.6602H11.6699V0H0V11.6699H5V25.8398H15.8301V34.1699H19.1602V44.1699H11.6602V38.3398H0V50H11.6699V45.8301H20.8398V34.1699H34.1699V30.8398H43.3398V38.3398H38.3398V50H50V38.3301H45V29.1602H34.1699V15.8301H30.8398V6.66992H38.3398V11.6699H50ZM40 1.66992H48.3301V10H40V1.66992ZM1.66992 10V1.66992H10V10H1.66992ZM10 48.3301H1.66992V40H10V48.3301ZM48.3301 40V48.3301H40V40H48.3301ZM32.5 17.5V32.5H17.5V17.5H32.5ZM41.6699 46.6699H46.6699V41.6699H41.6699V46.6699ZM43.3301 43.3301H45V45H43.3301V43.3301ZM8.33008 41.6699H3.33008V46.6699H8.33008V41.6699ZM6.66992 45H5V43.3301H6.66992V45ZM19.3457 25.3906C19.3457 25.4102 19.3457 25.4297 19.3457 25.4492V25.5078C19.3555 25.5859 19.3652 25.6738 19.375 25.752C19.3945 25.8496 19.4043 25.9473 19.4238 26.0449C19.4336 26.0938 19.4434 26.1426 19.4531 26.1914C19.4727 26.2891 19.4922 26.3965 19.5215 26.4941C19.5508 26.582 19.5703 26.6699 19.5996 26.7578C19.6191 26.8066 19.6289 26.8457 19.6484 26.8945C19.707 27.0703 19.7852 27.2559 19.8633 27.4316C19.8828 27.4805 19.9023 27.5195 19.9219 27.5586C20.127 27.9785 20.3711 28.3691 20.6738 28.7305C20.6836 28.7305 20.6836 28.7402 20.6934 28.75C20.8105 28.8965 20.9375 29.0332 21.0742 29.1699C21.1035 29.1992 21.1426 29.2383 21.1719 29.2676C21.2305 29.3262 21.2988 29.3848 21.3574 29.4434C21.3965 29.4824 21.4453 29.5117 21.4844 29.5508C21.5039 29.5703 21.5332 29.5898 21.5527 29.6094C21.6797 29.707 21.7969 29.7949 21.9336 29.8828L22.0312 29.9512C22.1582 30.0293 22.2852 30.1074 22.4121 30.1855C22.832 30.4199 23.2812 30.5859 23.7402 30.7129C23.7891 30.7324 23.8281 30.7422 23.877 30.752C23.9258 30.7617 23.9648 30.7715 24.0137 30.7813C24.0723 30.791 24.1309 30.8008 24.1797 30.8105C24.2676 30.8301 24.3555 30.8398 24.4434 30.8496C24.4531 30.8496 24.4629 30.8496 24.4629 30.8496C24.5508 30.8594 24.6484 30.8691 24.7363 30.8789H24.7559C24.8438 30.8887 24.9316 30.8887 25.0293 30.8984H25.1953C25.2734 30.8984 25.3418 30.8984 25.4199 30.8984C25.459 30.8984 25.498 30.8984 25.5371 30.8984H25.5762H25.6348C25.6641 30.8984 25.7031 30.8984 25.7324 30.8887C25.8398 30.8789 25.9375 30.8691 26.0352 30.8594C26.0742 30.8594 26.1035 30.8496 26.1426 30.8398L26.3086 30.8105C26.3281 30.8105 26.3477 30.8008 26.3672 30.8008C26.3867 30.791 26.4062 30.791 26.4258 30.7813L26.4746 30.7715C26.4941 30.7617 26.5137 30.7617 26.5332 30.752C26.8457 30.6836 27.1484 30.5859 27.4414 30.459L27.4805 30.4395C27.5195 30.4199 27.5586 30.4004 27.6074 30.3906C27.7148 30.3418 27.8223 30.2832 27.9395 30.2246L28.0664 30.1562C28.0762 30.1562 28.0859 30.1465 28.0957 30.1367C28.1055 30.127 28.1055 30.127 28.1152 30.127C28.291 30.0195 28.4668 29.9121 28.6328 29.7949L28.7207 29.7266C28.7402 29.707 28.7695 29.6973 28.7891 29.6777C28.8184 29.6582 28.8379 29.6387 28.8672 29.6191L28.9941 29.5117C29.0332 29.4727 29.0723 29.4434 29.1211 29.4043C29.248 29.2871 29.3652 29.1699 29.4922 29.043C29.5508 28.9844 29.5996 28.9258 29.6582 28.8672L29.4922 28.7012L28.623 27.832L28.3301 28.1152C27.6855 28.7598 26.8652 29.1895 25.9766 29.3457V27.2266H24.502V29.3555H24.4824C23.584 29.1992 22.7441 28.7793 22.0898 28.125C21.4453 27.4805 21.0156 26.6406 20.8594 25.752H27.4316V24.2871H20.8496V24.2676C21.0059 23.3691 21.4355 22.5293 22.0801 21.875C22.7344 21.2207 23.5645 20.791 24.4727 20.6348H24.4824V22.8027H25.957V20.6445C26.8457 20.8008 27.666 21.2305 28.3105 21.875L28.6035 22.168L28.8477 21.9238L29.3457 21.4258L29.3945 21.377L29.6289 21.1426C29.5605 21.0645 29.4922 20.9863 29.4238 20.918C29.3555 20.8496 29.2969 20.791 29.2285 20.7227C29.1992 20.6934 29.1699 20.6641 29.1309 20.6348C29.082 20.5859 29.0332 20.5469 28.9746 20.498L28.8184 20.3711C28.584 20.1855 28.3398 20.0195 28.0859 19.873C28.0664 19.8633 28.0566 19.8535 28.0273 19.8438L27.9004 19.7754C27.7441 19.6875 27.5781 19.6191 27.4023 19.541C27.3633 19.5215 27.3242 19.5117 27.2949 19.4922C26.9629 19.3652 26.6211 19.2676 26.2598 19.1992L26.1328 19.1797C26.0742 19.1699 26.0059 19.1602 25.9473 19.1504C25.918 19.1504 25.8789 19.1406 25.8398 19.1406C25.8008 19.1309 25.7715 19.1309 25.7324 19.1309C25.6934 19.1211 25.6641 19.1211 25.625 19.1211C25.6055 19.1211 25.5859 19.1211 25.5664 19.1211C25.5469 19.1211 25.5273 19.1211 25.5078 19.1211C25.4785 19.1211 25.4492 19.1211 25.4199 19.1211C25.3418 19.1211 25.2734 19.1211 25.1953 19.1211C25.1367 19.1211 25.0879 19.1211 25.0293 19.1211C24.9414 19.1211 24.8438 19.1309 24.7559 19.1406H24.7363C24.6387 19.1504 24.5312 19.1602 24.4434 19.1699C24.3555 19.1895 24.2676 19.1992 24.1797 19.209C24.0723 19.2285 23.9551 19.2578 23.8477 19.2773C23.7109 19.3066 23.584 19.3457 23.4473 19.3848C23.2129 19.4531 22.998 19.541 22.7734 19.6387C22.6855 19.668 22.6074 19.7168 22.5195 19.7656C22.4805 19.7852 22.4316 19.8145 22.3926 19.834C22.3438 19.8633 22.3047 19.8828 22.2559 19.9121C22.2168 19.9316 22.1875 19.9512 22.1484 19.9707C22.1094 20 22.0703 20.0195 22.0215 20.0488C21.9824 20.0781 21.9434 20.0977 21.9043 20.127C21.8555 20.1562 21.8164 20.1855 21.7773 20.2148C21.748 20.2441 21.709 20.2637 21.6797 20.293C21.6406 20.3223 21.6016 20.3516 21.5625 20.3809C21.4941 20.4297 21.4258 20.4883 21.3574 20.5469C21.3574 20.5566 21.3477 20.5566 21.3379 20.5664C21.2695 20.625 21.2012 20.6836 21.1328 20.752C21.1035 20.7812 21.0645 20.8105 21.0352 20.8496C20.9668 20.918 20.9082 20.9863 20.8398 21.0547C20.7715 21.123 20.7129 21.1914 20.6543 21.2695C20.625 21.2988 20.6055 21.3281 20.5762 21.3574C20.5078 21.4355 20.4492 21.5234 20.3906 21.6016C20.3613 21.6406 20.3418 21.6797 20.3125 21.7188C20.2832 21.7578 20.2637 21.7969 20.2344 21.8359C20.2051 21.875 20.1855 21.9141 20.1562 21.9629C20.1367 22.002 20.1172 22.041 20.0977 22.0703C20.0684 22.1094 20.0488 22.1582 20.0195 22.207C20 22.2461 19.9707 22.2949 19.9512 22.334C19.8633 22.5 19.7852 22.6758 19.7168 22.8516C19.6973 22.9004 19.6777 22.9395 19.668 22.9883C19.6191 23.125 19.5801 23.2617 19.5312 23.3984C19.5215 23.4375 19.5117 23.4668 19.502 23.5059C19.4922 23.5254 19.4922 23.5547 19.4824 23.5742C19.4727 23.623 19.4629 23.6621 19.4531 23.7109C19.4141 23.8867 19.375 24.0723 19.3555 24.2578C19.3457 24.3457 19.3359 24.4238 19.3262 24.502C19.3262 24.5215 19.3262 24.541 19.3262 24.5605C19.3262 24.5801 19.3262 24.5898 19.3262 24.6094C19.3262 24.6875 19.3164 24.7559 19.3164 24.8242C19.3164 24.8828 19.3164 24.9316 19.3164 24.9902C19.3164 25.0488 19.3164 25.0977 19.3164 25.1562C19.3359 25.2441 19.3457 25.3125 19.3457 25.3906Z" fill="#CECECE"/></svg>),
                text: 'The decentralized system does not allow to wind up subscribers, protects user funds, and acts as a guarantor of transactions between the fashion maker and the model. Imagine a social network in the world of fashion  without fakes and cheating!',
                isOpen: false
            },
        ]
    }
    
    openWhatItem = (e) => {
        var { whoItems } = this.state
        const id = e.target.id

        var whoItemsR = this.state.whoItems.map((item) => {
            return item.isOpen = false
        })
        this.setState({ whoItems, whoItemsR })

        whoItems[id].isOpen = !this.state.whoItems[id].isOpen
        this.setState({ whoItems })
    }
    
    render() {
        return (
            <main className="What">
                <div className="What__left-side">
                    <div className="What__container">
                        <div className="What__title">
                            <h1>Preference:</h1>
                        </div>
                        <div className="What__content">
                            { this.state.whoItems.map((whoItem, index) => {
                                return (
                                    <article className="What__item" key={index}>
                                        <div className="What__item_header">
                                            <div className={ whoItem.isOpen ? 'What__item_title-img active' : 'What__item_title-img' }>
                                                {whoItem.icon}
                                            </div>
                                            <div className="What__item-title_wr">
                                                <h3 className={ whoItem.isOpen ? 'What__item-title' : 'What__item-title disactive' } onClick={this.openWhatItem} key={index} id={index}>{whoItem.title}</h3>
                                            </div>
                                            <div className={ whoItem.isOpen ? 'What__item_title-arrow active' : 'What__item_title-arrow' }>
                                                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0)">
                                                        <path d="M14.2056 0.00339905C14.1756 0.0271924 14.149 0.0509857 14.1223 0.0781781L8 6.32903L1.87432 0.07138C1.84769 0.0441876 1.82439 0.0203943 1.79442 0L0 1.83209C0.0233042 1.85928 0.0466084 1.88647 0.0699126 1.91366L7.36413 9.36098C7.3841 9.38137 7.40741 9.40177 7.43071 9.42216L7.99667 10L8.53932 9.44596C8.57262 9.41876 8.60591 9.39157 8.63587 9.36098L15.9268 1.92046C15.9534 1.89327 15.9767 1.86608 16 1.83549L14.2056 0.00339905Z" fill="#929292"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect width="16" height="10" fill="white"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        {/*<CSSTransition*/}
                                            {/*classNames="what"*/}
                                            {/*transitionEnterTimeout={900}*/}
                                            {/*transitionLeaveTimeout={600}*/}
                                        {/*>*/}
                                        { whoItem.isOpen ? (
                                            <div className="What__item_text">
                                                <div className="What__item_text-content">
                                                    {whoItem.text}
                                                </div>
                                            </div>
                                        ) : null }
                                        {/*</CSSTransition>*/}
                                    </article>
                                )}
                            )}
                        </div>
                    </div>
                </div>
                <div className="What__right-side"></div>
            </main>
        );
    }
}

export default What;
