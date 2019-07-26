import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
import { TimelineMax } from 'gsap'

import './WhatCreative.scss'
import Social from "../Social/Social";
import Pagination from "../Pagination/Pagination";
import Scroll from "../Scroll/Scroll";

import rateMockup from '../../img/roule-mockups/fashmaker_Your_Rate.png'
import portfolioMockup from '../../img/roule-mockups/fashmaker_portfolio.png'
import findMockup from '../../img/roule-mockups/fashmaker_Find_a_model_.png'
import crowdfundingMockup from '../../img/roule-mockups/fashmaker_Crowdfunding.png'
import eventsMockup from '../../img/roule-mockups/fashmaker_start_event.png'

// import { CSSTransition } from 'react-transition-group'

class What extends Component {
    state = {
        whoItems: [
            {
                title: 'Your Rate',
                icon: (<svg width="50" height="46" viewBox="0 0 50 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.7129 13.3752H43.6035V12.0122L44.9219 10.5609C45.6055 9.80588 45.9766 8.8351 45.9766 7.81529V4.36362C45.9766 1.95137 44.0234 0 41.6211 0H39.6191C37.2168 0 35.2734 1.96118 35.2734 4.36362V7.80548C35.2734 8.82529 35.6445 9.79608 36.3281 10.5511L37.6465 12.0024V13.3654H35.5469C33.5059 13.3654 31.7871 14.8167 31.3672 16.7386C31.1523 16.7092 30.9375 16.6896 30.7129 16.6896H28.2422V15.0226L29.7461 13.3556C30.498 12.5221 30.9082 11.4435 30.9082 10.3256V6.46208C30.9082 3.80468 28.75 1.63758 26.1035 1.63758C25.6836 1.63758 25.3516 1.97098 25.3516 2.39264C25.3516 2.81429 25.6836 3.14769 26.1035 3.14769C27.9199 3.14769 29.4043 4.63818 29.4043 6.46208V10.3452C29.4043 11.0905 29.1309 11.8063 28.6328 12.3652L27.0801 14.0812C26.875 14.2185 26.7383 14.4539 26.7383 14.7186V17.4643C26.7383 17.8859 27.0703 18.2193 27.4902 18.2193H30.7031C32.4805 18.2193 33.9258 19.6706 33.9258 21.4553V26.1915H16.0254V21.4553C16.0254 20.0628 16.9043 18.8763 18.1348 18.4154C18.1934 18.4056 18.252 18.386 18.3008 18.3566C18.6035 18.2586 18.916 18.2095 19.248 18.2095H22.4609C22.8809 18.2095 23.2129 17.8761 23.2129 17.4545V14.7088C23.2129 14.4441 23.0762 14.2087 22.8711 14.0714L21.3184 12.3554C20.8203 11.8063 20.5469 11.0905 20.5469 10.3354V6.46208C20.5469 4.63818 22.0312 3.14769 23.8477 3.14769C24.2676 3.14769 24.5996 2.81429 24.5996 2.39264C24.5996 1.97098 24.2676 1.63758 23.8477 1.63758C21.2012 1.63758 19.043 3.80468 19.043 6.46208V10.3452C19.043 11.4729 19.4531 12.5417 20.2051 13.3752L21.709 15.0422V16.7092H19.2383C19.0234 16.7092 18.8184 16.7288 18.623 16.7484C18.2031 14.8265 16.4844 13.3752 14.4434 13.3752H12.334V12.0122L13.6523 10.5609C14.3359 9.80588 14.707 8.8351 14.707 7.81529V4.36362C14.707 1.95137 12.7539 0 10.3516 0H8.36914C5.9668 0 4.01367 1.96118 4.01367 4.36362V7.80548C4.01367 8.82529 4.38477 9.79608 5.06836 10.5511L6.38672 12.0024V13.3654H4.28711C1.92383 13.3752 0 15.307 0 17.6702V22.5535C0 22.9752 0.332031 23.3086 0.751953 23.3086H12.4512C12.8711 23.3086 13.2031 22.9752 13.2031 22.5535C13.2031 22.1319 12.8711 21.7985 12.4512 21.7985H1.50391V17.68C1.50391 16.1405 2.75391 14.8853 4.28711 14.8853H7.14844C7.56836 14.8853 7.90039 14.5519 7.90039 14.1303V11.6886C7.90039 11.4239 7.76367 11.1983 7.56836 11.061L6.20117 9.55093C5.77148 9.07044 5.53711 8.46248 5.53711 7.81529V4.36362C5.53711 2.78487 6.81641 1.5003 8.38867 1.5003H10.3906C11.9629 1.5003 13.2422 2.78487 13.2422 4.36362V7.80548C13.2422 8.45267 13.0078 9.06064 12.5781 9.54113L11.2109 11.0512C11.0059 11.1885 10.8789 11.414 10.8789 11.6788V14.1205C10.8789 14.5421 11.2109 14.8755 11.6309 14.8755H14.4531C15.8203 14.8755 16.9531 15.8659 17.1875 17.1701C15.6152 17.9448 14.5215 19.5627 14.5215 21.4357V26.927C14.5215 27.3486 14.8535 27.682 15.2734 27.682H34.6777C35.0977 27.682 35.4297 27.3486 35.4297 26.927V21.4357C35.4297 19.5725 34.3555 17.9644 32.8027 17.1799C33.0273 15.8659 34.1699 14.8657 35.5371 14.8657H38.3984C38.8184 14.8657 39.1504 14.5323 39.1504 14.1107V11.669C39.1504 11.4042 39.0137 11.1787 38.8184 11.0414L37.4512 9.53132C37.0215 9.05083 36.7871 8.44287 36.7871 7.79568V4.36362C36.7871 2.78487 38.0664 1.5003 39.6387 1.5003H41.6406C43.2129 1.5003 44.4922 2.78487 44.4922 4.36362V7.80548C44.4922 8.45267 44.2578 9.06064 43.8281 9.54113L42.4609 11.0512C42.2559 11.1885 42.1289 11.414 42.1289 11.6788V14.1205C42.1289 14.5421 42.4609 14.8755 42.8809 14.8755H45.7422C47.2754 14.8755 48.5254 16.1307 48.5254 17.6702V21.7887H37.6855C37.2656 21.7887 36.9336 22.1221 36.9336 22.5437C36.9336 22.9654 37.2656 23.2988 37.6855 23.2988H49.248C49.668 23.2988 50 22.9654 50 22.5437V17.6702C50 15.307 48.0762 13.3752 45.7129 13.3752ZM31.9629 36.7524L27.8613 36.0758L25.9473 32.3594C25.8203 32.1045 25.5566 31.9476 25.2832 31.9476C25.0098 31.9476 24.7461 32.1045 24.6191 32.3594L22.7051 36.0758L18.6035 36.7524C18.3301 36.8015 18.0957 36.9976 18.0078 37.2624C17.9199 37.5271 17.9883 37.8213 18.1836 38.0272L21.1133 40.9984L20.4883 45.1267C20.4492 45.4012 20.5664 45.6856 20.791 45.8523C20.918 45.9504 21.0742 45.9994 21.2305 45.9994C21.3477 45.9994 21.4648 45.97 21.5723 45.921L25.293 44.048L29.0137 45.921C29.2676 46.0484 29.5703 46.019 29.7949 45.8523C30.0195 45.6856 30.1367 45.411 30.0977 45.1267L29.4727 40.9984L32.4023 38.0272C32.5977 37.8311 32.666 37.5271 32.5781 37.2624C32.4707 36.9976 32.2461 36.7917 31.9629 36.7524ZM28.1152 40.2041C27.9492 40.3708 27.8711 40.616 27.9102 40.8513L28.3789 43.9107L25.625 42.5183C25.4102 42.4104 25.166 42.4104 24.9512 42.5183L22.1973 43.9107L22.666 40.8513C22.7051 40.616 22.627 40.3806 22.4609 40.2041L20.293 37.9978L23.3398 37.4977C23.5742 37.4585 23.7793 37.3114 23.8867 37.0957L25.3027 34.3402L26.7188 37.0957C26.8262 37.3114 27.0313 37.4585 27.2656 37.4977L30.3125 37.9978L28.1152 40.2041ZM48.418 31.2023L44.3164 30.5257L42.4023 26.8093C42.2754 26.5543 42.0117 26.3974 41.7383 26.3974C41.4551 26.3974 41.2012 26.5543 41.0742 26.8093L39.1602 30.5257L35.0586 31.2023C34.7852 31.2514 34.5508 31.4475 34.4629 31.7122C34.375 31.977 34.4434 32.2712 34.6387 32.4771L37.5684 35.4483L36.9434 39.5765C36.9043 39.8511 37.0215 40.1355 37.2461 40.3022C37.4707 40.4689 37.7734 40.4885 38.0273 40.3708L41.748 38.4979L45.4688 40.3708C45.5762 40.4199 45.6934 40.4493 45.8105 40.4493C45.9668 40.4493 46.123 40.4002 46.25 40.3022C46.4746 40.1355 46.5918 39.8609 46.5527 39.5765L45.9277 35.4483L48.8574 32.4771C49.0527 32.281 49.1211 31.977 49.0332 31.7122C48.9258 31.4475 48.7012 31.2514 48.418 31.2023ZM44.5703 34.654C44.4043 34.8207 44.3262 35.0658 44.3652 35.3012L44.834 38.3606L42.0703 36.9682C41.9629 36.9192 41.8457 36.8897 41.7285 36.8897C41.6113 36.8897 41.4941 36.9192 41.3867 36.9682L38.6328 38.3606L39.1016 35.3012C39.1406 35.0658 39.0625 34.8305 38.8965 34.654L36.7285 32.4575L39.7754 31.9574C40.0098 31.9181 40.2148 31.7711 40.3223 31.5553L41.7383 28.7999L43.1543 31.5553C43.2617 31.7711 43.4668 31.9181 43.7012 31.9574L46.748 32.4575L44.5703 34.654ZM15.5078 31.2023L11.4062 30.5257L9.49219 26.8093C9.36523 26.5543 9.10156 26.3974 8.82812 26.3974C8.54492 26.3974 8.29102 26.5543 8.16406 26.8093L6.25 30.5257L2.14844 31.2023C1.875 31.2514 1.64062 31.4475 1.55273 31.7122C1.46484 31.977 1.5332 32.2712 1.72852 32.4771L4.6582 35.4483L4.0332 39.5765C3.99414 39.8511 4.11133 40.1355 4.33594 40.3022C4.56055 40.4689 4.86328 40.4885 5.11719 40.3708L8.83789 38.4979L12.5586 40.3708C12.666 40.4199 12.7832 40.4493 12.9004 40.4493C13.0566 40.4493 13.2129 40.4002 13.3398 40.3022C13.5645 40.1355 13.6816 39.8609 13.6426 39.5765L13.0176 35.4483L15.9473 32.4771C16.1426 32.281 16.2109 31.977 16.123 31.7122C16.0156 31.4475 15.791 31.2514 15.5078 31.2023ZM11.6602 34.654C11.4941 34.8207 11.416 35.0658 11.4551 35.3012L11.9238 38.3606L9.16992 36.9682C9.0625 36.9192 8.94531 36.8897 8.82812 36.8897C8.71094 36.8897 8.59375 36.9192 8.48633 36.9682L5.73242 38.3606L6.20117 35.3012C6.24023 35.0658 6.16211 34.8305 5.99609 34.654L3.82812 32.4575L6.875 31.9574C7.10938 31.9181 7.31445 31.7711 7.42188 31.5553L8.83789 28.7999L10.2539 31.5553C10.3613 31.7711 10.5664 31.9181 10.8008 31.9574L13.8477 32.4575L11.6602 34.654Z" fill="#CECECE"/></svg>),
                text: 'A completed Profile and a high rating help your customers quickly make a choice and buy your service in one click. See the rest of the details in your calendar.',
                isOpen: true
            },
            {
                title: 'Portfolio',
                icon: (<svg width="45" height="50" viewBox="0 0 45 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.5 21.6667C25.5938 21.6667 20 27.2604 20 34.1667C20 41.0729 25.5938 46.6667 32.5 46.6667C39.4062 46.6667 45 41.0729 45 34.1667C44.9896 27.2708 39.3958 21.6771 32.5 21.6667ZM39.1667 42.6875C38.6458 43.0937 38.0833 43.4583 37.5 43.7708V41.6667H35.8333V44.4688C33.6667 45.1771 31.3333 45.1771 29.1667 44.4688V41.6667H27.5V43.7708C26.9167 43.4583 26.3542 43.0937 25.8333 42.6875V41.6875C25.8333 40.5729 26.5729 39.5938 27.6458 39.2812L29.4583 38.7604L32 40.6667C32.2917 40.8854 32.7083 40.8854 33 40.6667L35.5417 38.7604L37.3542 39.2812C38.4271 39.5938 39.1667 40.5729 39.1667 41.6875V42.6875ZM30 31.6667H30.1562C31.3125 31.6667 32.4375 31.3229 33.3958 30.6875L33.8542 30.3854C34.1146 30.8438 34.5208 31.2188 35.0104 31.4271V32.5C35.0104 33.8854 33.8958 35 32.5104 35C31.125 35 30.0104 33.8854 30.0104 32.5V31.6667H30ZM29.1667 30C29.1562 28.1562 30.6458 26.6667 32.4896 26.6562C34.3333 26.6458 35.8333 28.1354 35.8333 29.9792C35.5938 29.9167 35.3958 29.7604 35.2812 29.5417L34.9062 28.8021C34.8021 28.5833 34.6042 28.4271 34.375 28.3646C34.1458 28.3021 33.8958 28.3437 33.6979 28.4792L32.4583 29.3021C31.7708 29.7604 30.9687 30 30.1458 30H29.1667ZM33.625 38.1146L32.5 38.9583L31.375 38.1146C31.5521 37.9583 31.6562 37.7396 31.6667 37.5V36.5833C31.9375 36.6354 32.2188 36.6667 32.5 36.6667C32.7812 36.6667 33.0625 36.6354 33.3333 36.5833V37.5C33.3333 37.7396 33.4375 37.9583 33.625 38.1146ZM40.7917 41.125C40.5729 39.4896 39.4062 38.1354 37.8125 37.6667L35 36.8646V35.8021C36.0417 35.0208 36.6667 33.7917 36.6667 32.4896V31.6562C37.125 31.6562 37.5 31.2812 37.5 30.8229V29.9896C37.5 27.2292 35.2604 24.9896 32.5 24.9896C29.7396 24.9896 27.5 27.2292 27.5 29.9896V30.8229C27.5 31.2812 27.875 31.6562 28.3333 31.6562V32.4896C28.3333 33.7917 28.9583 35.0208 30 35.8021V36.875L27.1875 37.6771C25.5938 38.1354 24.4375 39.4896 24.2083 41.1354C20.5104 36.7396 20.8854 30.2292 25.0521 26.2812C29.2292 22.3333 35.75 22.3333 39.9271 26.2812C44.1146 30.2188 44.4896 36.7396 40.7917 41.125ZM24.1667 35H25.8333V33.3333H24.1667V35ZM39.1667 33.3333V35H40.8333V33.3333H39.1667ZM34.1667 48.3333H4.16667C2.78125 48.3333 1.66667 47.2188 1.66667 45.8333V4.16667C1.66667 2.78125 2.78125 1.66667 4.16667 1.66667H27.5V9.16667C27.5 9.5 27.6979 9.8125 28.0104 9.9375C28.3229 10.0625 28.6771 9.98958 28.9167 9.76042L30.8333 7.84375L32.7396 9.75C32.9792 9.98958 33.3333 10.0625 33.6458 9.92708C33.9583 9.80208 34.1562 9.48958 34.1562 9.15625V1.66667C35.5417 1.66667 36.6562 2.78125 36.6562 4.16667V20.8333H38.3229V4.16667C38.3229 1.86458 36.4583 0 34.1562 0H4.16667C1.86458 0 0 1.86458 0 4.16667V45.8333C0 48.1354 1.86458 50 4.16667 50H34.1667C35.3646 50 36.5 49.4896 37.2917 48.5938L36.0417 47.4896C35.5625 48.0208 34.8854 48.3333 34.1667 48.3333ZM29.1667 1.66667H32.5V7.15625L31.4271 6.08333C31.1042 5.76042 30.5729 5.76042 30.25 6.08333L29.1667 7.15625V1.66667ZM5 5V6.66667H8.33333V5H5ZM18.3333 5H10V6.66667H18.3333V5ZM5 10H18.3333V8.33333H5V10ZM26.6667 15H5V16.6667H26.6667V15ZM28.3333 16.6667H33.3333V15H28.3333V16.6667ZM21.6667 20H5V21.6667H21.6667V20ZM18.3333 25H5V26.6667H18.3333V25ZM16.6667 30H5V31.6667H16.6667V30ZM13.3333 38.3333H5V40H13.3333V38.3333ZM5 43.3333H13.3333V41.6667H5V43.3333Z" fill="#CECECE"/></svg>),
                text: 'Surprise and inspire with your style and creativity, take orders from all over the world and share new products every day.',
                isOpen: false
            },
            {
                title: 'Find a model',
                icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.5214 5.75916C24.5149 5.75916 18.802 11.4721 18.802 18.4786C18.802 21.9587 20.2649 25.3311 22.7903 27.7179C22.8365 27.7795 22.8673 27.8103 22.8981 27.8257C25.2695 29.9969 28.3184 31.1826 31.506 31.1826C34.6936 31.1826 37.7425 29.9969 40.0831 27.8411C40.1447 27.7949 40.1755 27.7641 40.2063 27.7333C42.7625 25.3311 44.21 21.9587 44.21 18.4786C44.2408 11.4721 38.5433 5.75916 31.5214 5.75916ZM38.2815 27.0249C36.3412 28.5648 34.0006 29.3656 31.5368 29.3656C29.073 29.3656 26.7324 28.5494 24.7921 27.0249L24.5919 26.871L24.6997 26.6554C26.0394 24.13 28.6572 22.5593 31.5368 22.5593C34.4164 22.5593 37.0342 24.13 38.3739 26.6554L38.4817 26.871L38.2815 27.0249ZM28.688 17.8934V16.9541C28.688 15.3834 29.9661 14.1207 31.5214 14.1207C33.0921 14.1207 34.3548 15.3988 34.3548 16.9541V17.8934C34.3548 19.4641 33.0767 20.7268 31.5214 20.7268C29.9661 20.7268 28.688 19.4641 28.688 17.8934ZM40.0985 25.2079L39.8368 25.5467L39.6058 25.1771C38.5433 23.4678 36.988 22.1743 35.1401 21.4352L34.7552 21.2812L35.0323 20.9578C35.7715 20.1109 36.1872 19.0176 36.1872 17.8934V16.9541C36.1872 14.3979 34.093 12.3037 31.5368 12.3037C28.9806 12.3037 26.8864 14.3825 26.8864 16.9541V17.8934C26.8864 19.0176 27.3021 20.1109 28.0413 20.9578L28.3184 21.2812L27.9335 21.4352C26.0856 22.1897 24.5457 23.4832 23.4678 25.1771L23.2368 25.5467L22.9751 25.2079C21.4352 23.2676 20.6344 20.9424 20.6344 18.4786C20.6344 12.4577 25.5159 7.57622 31.5368 7.57622C37.5577 7.57622 42.4392 12.4577 42.4392 18.4786C42.4238 20.9424 41.623 23.2676 40.0985 25.2079ZM31.5214 0C21.3428 0 13.0428 8.28457 13.0428 18.4786C13.0428 21.7739 13.9513 25.0385 15.6606 27.9027L15.7838 28.1029L15.6144 28.2723L1.2781 42.5624C0.461965 43.3785 0 44.4718 0 45.6421C0 46.8124 0.446566 47.9058 1.2781 48.7219C2.10964 49.5534 3.20296 50 4.35787 50C5.51278 50 6.6215 49.5534 7.43763 48.7219L21.9125 34.247L22.1127 34.3702C24.9615 36.0641 28.2107 36.9572 31.5214 36.9572C41.7 36.9572 50 28.6726 50 18.4786C50 8.28457 41.7154 0 31.5214 0ZM20.1571 33.4463L6.15953 47.4438C5.66677 47.9366 5.00462 48.1983 4.35787 48.1983C3.71112 48.1983 3.04897 47.952 2.55621 47.4438C2.07884 46.9664 1.80166 46.3197 1.80166 45.6421C1.80166 44.9646 2.06344 44.3178 2.55621 43.8405L16.8309 29.6273L17.0465 29.8891C17.9858 31.0748 19.0176 32.1066 20.1417 32.9843L20.4034 33.1999L20.1571 33.4463ZM31.5214 35.1247C22.3283 35.1247 14.8599 27.6563 14.8599 18.4632C14.8599 9.27009 22.3283 1.80166 31.5214 1.80166C40.7145 1.80166 48.1829 9.27009 48.1829 18.4632C48.1829 27.6563 40.7145 35.1247 31.5214 35.1247Z" fill="#CECECE"/></svg>),
                text: 'Find your perfect muse! Determine her height, parameters, eye color and even the current geolocation. After clicking “Book” her confirmation will appear in your personal calendar.',
                isOpen: false
            },
            {
                title: 'Crowdfunding',
                icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.20442 25.5011L19.1436 14.4766L24.2265 19.5991C24.6409 20.0167 25.3315 20.0445 25.7735 19.5991L41.4641 3.75835V6.98775C41.4641 7.60022 41.9613 8.10134 42.5691 8.10134C43.1768 8.10134 43.674 7.60022 43.674 6.98775L43.5635 0.612472L43.5083 0.556793L43.453 0.445434L43.3425 0.334076C43.3149 0.306236 43.2873 0.278396 43.2597 0.250557C43.232 0.222717 43.2044 0.222717 43.1768 0.194877L42.9006 0.0556793L42.8453 0.0278396H42.7901L42.7072 0C42.6243 0 42.5967 0 42.5691 0H36.7127C36.105 0 35.6077 0.501114 35.6077 1.11359C35.6077 1.72606 36.105 2.22717 36.7127 2.22717H39.9171L25 17.2606L19.9171 12.1381C19.6961 11.9154 19.4199 11.804 19.1436 11.804C18.8674 11.804 18.5912 11.9154 18.3702 12.1381L6.65746 23.9421C6.43646 24.1648 6.32597 24.4154 6.32597 24.7216C6.32597 25.0278 6.43646 25.2784 6.65746 25.5011C7.07182 25.9187 7.79006 25.9187 8.20442 25.5011ZM0 48.5245C0 49.3318 0.662983 50 1.46409 50H13.1768C13.9779 50 14.6409 49.3318 14.6409 48.5245V46.4644H0V48.5245ZM13.1768 39.9777H1.46409C0.662983 39.9777 0 40.6459 0 41.4532V43.5134H14.6409V41.4532C14.6409 40.618 13.9779 39.9777 13.1768 39.9777ZM17.6796 48.5245C17.6796 49.3318 18.3425 50 19.1436 50H30.8564C31.6575 50 32.3204 49.3318 32.3204 48.5245V46.4644H17.6796V48.5245ZM35.3315 43.5134H49.9724V39.9777H35.3315V43.5134ZM48.5359 20.49H36.8232C36.0221 20.49 35.3591 21.1581 35.3591 21.9655V24.0256H50V21.9655C50 21.1581 49.337 20.49 48.5359 20.49ZM35.3315 30.5122H49.9724V26.9766H35.3315V30.5122ZM35.3315 37.0267H49.9724V33.4911H35.3315V37.0267ZM35.3315 48.5245C35.3315 49.3318 35.9945 50 36.7956 50H48.5083C49.3094 50 49.9724 49.3318 49.9724 48.5245V46.4644H35.3315V48.5245ZM17.6796 43.5134H32.3204V39.9777H17.6796V43.5134ZM30.8564 33.4632H19.1436C18.3425 33.4632 17.6796 34.1314 17.6796 34.9388V36.9989H32.3204V34.9388C32.3204 34.1314 31.6575 33.4632 30.8564 33.4632Z" fill="#CECECE"/></svg>),
                text: 'Experts from all around the world are ready to support your talent! Get investments, use it for your personal development, rating and follow the career ladder.',
                isOpen: false
            },
{
                title: 'Start your event',
                icon: (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.355 15.8824C10.355 12.9412 7.98817 10.8824 5.32544 10.8824C2.36686 10.8824 0 13.2353 0 15.8824C0 18.5294 2.36686 20.8824 5.02959 20.8824C7.69231 20.8824 10.355 18.8235 10.355 15.8824ZM2.36686 15.8824C2.36686 14.4118 3.5503 13.2353 5.02959 13.2353C6.50888 13.2353 7.69231 14.4118 7.69231 15.8824C7.69231 17.3529 6.50888 18.5294 5.02959 18.5294C3.5503 18.8235 2.36686 17.6471 2.36686 15.8824ZM41.4201 28.8235C37.8698 31.7647 32.5444 34.7059 24.8521 34.7059C17.4556 34.7059 12.1302 31.7647 8.28402 28.8235V25H1.77515V50H8.57988V32.0588C12.426 35 17.7515 37.3529 25.1479 37.3529C32.5444 37.3529 37.8698 35 41.716 32.0588V50H48.5207V25H41.4201V28.8235ZM6.21302 47.6471H4.14201V27.3529H6.21302V47.6471ZM43.787 27.3529H45.858V47.3529H43.787V27.3529ZM44.9704 10.8824C42.0118 10.8824 39.9408 13.2353 39.9408 15.8824C39.9408 18.5294 42.3077 20.8824 44.9704 20.8824C47.929 20.8824 50 18.5294 50 15.8824C50 13.2353 47.6331 10.8824 44.9704 10.8824ZM44.9704 18.8235C43.4911 18.8235 42.3077 17.6471 42.3077 16.1765C42.3077 14.7059 43.4911 13.5294 44.9704 13.5294C46.4497 13.5294 47.6331 14.7059 47.6331 16.1765C47.6331 17.6471 46.4497 18.8235 44.9704 18.8235ZM14.7929 8.23529H16.2722V4.70588H19.5266V3.23529H16.2722V0H14.7929V3.23529H11.5385V4.70588H14.7929V8.23529ZM34.0237 14.4118H35.503V10.8824H38.7574V9.41177H35.503V6.17647H34.0237V9.41177H30.7692V10.8824H34.0237V14.4118ZM23.9645 29.7059H26.3314V24.7059H31.3609V22.3529H26.3314V17.3529H23.9645V22.3529H18.9349V24.7059H23.9645V29.7059Z" fill="#CFCECE"/></svg>),
                text: 'Do you need to attract fashion experts, models and photographers to your design show?',
                isOpen: false
            },
        ],
        redirect: false,
        mouseWheelDirection: ''
    }

    componentDidMount() {
        document.addEventListener('wheel', () => {
            this.setRedirect()
        })
    }

    wheel(e) {
        var directionWheel = e.deltaY > 0 ? 'down' : 'up'

        this.setState({
            mouseWheelDirection: directionWheel
        })
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if ( this.state.redirect && this.state.mouseWheelDirection === 'down' ) return <Redirect to='/whopreloadercreative' />
        else if ( this.state.redirect && this.state.mouseWheelDirection === 'up' ) return <Redirect to='/creative' />
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

        // Get clicked title
        const clickedTitle = this.state.whoItems[id].title.toLowerCase().replace(/\s/g, '')

        // Get active mockup
        const currentMockup = document.getElementsByClassName('What__roule-mockup_img active')
        // Get mockup who will be active
        const clickedMockup = document.getElementById(clickedTitle)
        
        // TimeLine init
        const tlMockup = new TimelineMax({})

        // Mockup fadeOut and fadeIn
        tlMockup
            .to(currentMockup, .25, {opacity: 0})
            .to(currentMockup, 0, {display: 'none'})
            .to(clickedMockup, 0, {display: 'block', opacity: 0})
            .to(clickedMockup, .25, {opacity: 1})
            .set(clickedMockup, {className: "+=active"})

    }
    
    render() {
        return (
            <main className="What" onWheel = {(e) => this.wheel(e)}>
                {this.renderRedirect()}
                <Social/>
                <Pagination activePage={2} page="creative"/>
                <Scroll page="whopreloadercreative"/>
                <div className="What__left-side What__left-side-roules">
                    <div className="What__container">
                        <div className="What__content">
                            { this.state.whoItems.map((whoItem, index) => {
                                return (
                                    <article className={ whoItem.isOpen ? "What__item active" : "What__item disable" } key={index}>
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
                                            <div className="What__item_text">
                                                <div className="What__item_text-content">
                                                    {whoItem.text}
                                                </div>
                                            </div>
                                        {/*</CSSTransition>*/}
                                    </article>
                                )}
                            )}
                        </div>
                    </div>
                </div>
                <div className="What__right-side What__right-side-roules">
                    <div className="What__roule-mockups">
                        {/* Mockup Item */}
                        <div className="What__roule-mockup">
                            <img
                                src={rateMockup}
                                alt="Your Rate"
                                id="yourrate"
                                className="What__roule-mockup_img active"
                            />
                            <img
                                src={portfolioMockup}
                                alt="Portfolio"
                                id="portfolio"
                                className="What__roule-mockup_img"
                            />
                            <img
                                src={findMockup}
                                alt="Find a model"
                                id="findamodel"
                                className="What__roule-mockup_img"
                            />
                            <img
                                src={crowdfundingMockup}
                                alt="Crowdfunding"
                                id="crowdfunding"
                                className="What__roule-mockup_img"
                            />
                            <img
                                src={eventsMockup}
                                alt="Start your event"
                                id="startyourevent"
                                className="What__roule-mockup_img"
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default What;
