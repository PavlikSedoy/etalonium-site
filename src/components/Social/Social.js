import React from 'react'
import './Social.scss'

const getSocialClass = white => {
    const socialCalss = white ? 'Social__white-item_wr' : 'Social__item_wr'
    return socialCalss
}

function Social(props) {
    const white = props.white

    return (
        <div className="Social">
            <div className={getSocialClass(white)}>
                <a href="https://www.instagram.com/etalonium/?hl=uk" target="_blank" rel="noopener noreferrer">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3.80664C8.66406 3.80664 9.29492 4.00586 9.89258 4.33789C10.4902 4.66992 10.9551 5.13477 11.2871 5.73242C11.6191 6.33008 11.8184 6.96094 11.8184 7.625C11.8184 8.32227 11.6191 8.95312 11.2871 9.55078C10.9551 10.1484 10.4902 10.6133 9.89258 10.9453C9.29492 11.2773 8.66406 11.4434 8 11.4434C7.30273 11.4434 6.67188 11.2773 6.07422 10.9453C5.47656 10.6133 5.01172 10.1484 4.67969 9.55078C4.34766 8.95312 4.18164 8.32227 4.18164 7.625C4.18164 6.96094 4.34766 6.33008 4.67969 5.73242C5.01172 5.13477 5.47656 4.66992 6.07422 4.33789C6.67188 4.00586 7.30273 3.80664 8 3.80664ZM8 10.1152C8.66406 10.1152 9.26172 9.88281 9.75977 9.38477C10.2246 8.91992 10.4902 8.32227 10.4902 7.625C10.4902 6.96094 10.2246 6.36328 9.75977 5.86523C9.26172 5.40039 8.66406 5.13477 8 5.13477C7.30273 5.13477 6.70508 5.40039 6.24023 5.86523C5.74219 6.36328 5.50977 6.96094 5.50977 7.625C5.50977 8.32227 5.74219 8.91992 6.24023 9.38477C6.70508 9.88281 7.30273 10.1152 8 10.1152ZM12.8809 3.64062C12.8809 3.4082 12.7812 3.20898 12.6152 3.00977C12.416 2.84375 12.2168 2.74414 11.9844 2.74414C11.7188 2.74414 11.5195 2.84375 11.3535 3.00977C11.1543 3.20898 11.0879 3.4082 11.0879 3.64062C11.0879 3.90625 11.1543 4.10547 11.3535 4.27148C11.5195 4.4707 11.7188 4.53711 11.9844 4.53711C12.2168 4.53711 12.416 4.4707 12.582 4.27148C12.748 4.10547 12.8477 3.90625 12.8809 3.64062ZM15.4043 4.53711C15.4043 5.16797 15.4375 6.19727 15.4375 7.625C15.4375 9.08594 15.4043 10.1152 15.3711 10.7461C15.3379 11.377 15.2383 11.9082 15.1055 12.373C14.9062 12.9375 14.5742 13.4355 14.1758 13.834C13.7773 14.2324 13.2793 14.5312 12.748 14.7305C12.2832 14.8965 11.7188 14.9961 11.0879 15.0293C10.457 15.0625 9.42773 15.0625 8 15.0625C6.53906 15.0625 5.50977 15.0625 4.87891 15.0293C4.24805 14.9961 3.7168 14.8965 3.25195 14.6973C2.6875 14.5312 2.18945 14.2324 1.79102 13.834C1.39258 13.4355 1.09375 12.9375 0.894531 12.373C0.728516 11.9082 0.628906 11.377 0.595703 10.7461C0.5625 10.1152 0.5625 9.08594 0.5625 7.625C0.5625 6.19727 0.5625 5.16797 0.595703 4.53711C0.628906 3.90625 0.728516 3.3418 0.894531 2.87695C1.09375 2.3457 1.39258 1.84766 1.79102 1.44922C2.18945 1.05078 2.6875 0.71875 3.25195 0.519531C3.7168 0.386719 4.24805 0.287109 4.87891 0.253906C5.50977 0.220703 6.53906 0.1875 8 0.1875C9.42773 0.1875 10.457 0.220703 11.0879 0.253906C11.7188 0.287109 12.2832 0.386719 12.748 0.519531C13.2793 0.71875 13.7773 1.05078 14.1758 1.44922C14.5742 1.84766 14.9062 2.3457 15.1055 2.87695C15.2383 3.3418 15.3379 3.90625 15.4043 4.53711ZM13.8105 12.0078C13.9434 11.6426 14.0098 11.0449 14.0762 10.2148C14.0762 9.75 14.1094 9.05273 14.1094 8.15625V7.09375C14.1094 6.19727 14.0762 5.5 14.0762 5.03516C14.0098 4.20508 13.9434 3.60742 13.8105 3.24219C13.5449 2.57812 13.0469 2.08008 12.3828 1.81445C12.0176 1.68164 11.4199 1.61523 10.5898 1.54883C10.0918 1.54883 9.39453 1.51562 8.53125 1.51562H7.46875C6.57227 1.51562 5.875 1.54883 5.41016 1.54883C4.58008 1.61523 3.98242 1.68164 3.61719 1.81445C2.91992 2.08008 2.45508 2.57812 2.18945 3.24219C2.05664 3.60742 1.95703 4.20508 1.92383 5.03516C1.89062 5.5332 1.89062 6.23047 1.89062 7.09375V8.15625C1.89062 9.05273 1.89062 9.75 1.92383 10.2148C1.95703 11.0449 2.05664 11.6426 2.18945 12.0078C2.45508 12.7051 2.95312 13.1699 3.61719 13.4355C3.98242 13.5684 4.58008 13.668 5.41016 13.7012C5.875 13.7344 6.57227 13.7344 7.46875 13.7344H8.53125C9.42773 13.7344 10.125 13.7344 10.5898 13.7012C11.4199 13.668 12.0176 13.5684 12.3828 13.4355C13.0469 13.1699 13.5449 12.6719 13.8105 12.0078Z" fill="black"/></svg>
                </a>
            </div>
            <div className={getSocialClass(white)}>
                <a href="https://www.facebook.com/etalonium/" target="_blank" rel="noopener noreferrer">
                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.17383 17.125H6.29492V9.52148H8.71875L9.11719 6.5H6.29492V4.4082C6.29492 3.94336 6.36133 3.57812 6.56055 3.3457C6.75977 3.08008 7.19141 2.94727 7.78906 2.94727H9.38281V0.257812C8.78516 0.191406 7.98828 0.125 7.05859 0.125C5.86328 0.125 4.93359 0.490234 4.23633 1.1875C3.50586 1.88477 3.17383 2.84766 3.17383 4.10938V6.5H0.617188V9.52148H3.17383V17.125Z" fill="black"/></svg>
                </a>
            </div>
            <div className={getSocialClass(white)}>
                <a href="https://www.youtube.com/channel/UCwkRIk1AcppzxZ8y0ALwuxw/featured" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.6992 2.24219C18.832 2.83984 18.9648 3.76953 19.0312 4.96484L19.0645 6.625L19.0312 8.28516C18.9648 9.54688 18.832 10.4434 18.6992 11.041C18.5664 11.4395 18.3672 11.7715 18.1016 12.0371C17.8027 12.3359 17.4707 12.5352 17.0723 12.6348C16.4746 12.8008 15.1465 12.9004 13.0215 12.9668L10 13L6.97852 12.9668C4.85352 12.9004 3.49219 12.8008 2.92773 12.6348C2.5293 12.5352 2.16406 12.3359 1.89844 12.0371C1.59961 11.7715 1.40039 11.4395 1.30078 11.041C1.13477 10.4434 1.03516 9.54688 0.96875 8.28516L0.935547 6.625C0.935547 6.16016 0.935547 5.5957 0.96875 4.96484C1.03516 3.76953 1.13477 2.83984 1.30078 2.24219C1.40039 1.84375 1.59961 1.51172 1.89844 1.21289C2.16406 0.947266 2.5293 0.748047 2.92773 0.615234C3.49219 0.482422 4.85352 0.349609 6.97852 0.283203L10 0.25L13.0215 0.283203C15.1465 0.349609 16.4746 0.482422 17.0723 0.615234C17.4707 0.748047 17.8027 0.947266 18.1016 1.21289C18.3672 1.51172 18.5664 1.84375 18.6992 2.24219ZM8.14062 9.34766L12.8887 6.625L8.14062 3.93555V9.34766Z" fill="black"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Social