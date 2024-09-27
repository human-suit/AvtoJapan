import React, { Component, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
// import Flickity from 'flickity'

// skider //
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/main.module.css'

import Slider from "react-slick";
import hum from '../images/comp/Ellipse1.png'
import hum2 from '../images/comp/Ellipse2.png'
import hum3 from '../images/comp/Ellipse3.png'
import hum4 from '../images/comp/Ellipse4.png'
import hum5 from '../images/comp/Ellipse5.png'
import star from '../images/star_fill.svg'
import star_pol from '../images/star_pol.svg'
// import {Link} from 'react-router-dom'

// import io from 'socket.io-client'

// const socket = io.connect('http://localhost:5000')

// import header from './'

const Main = () =>{
    
    
    const { search } = useLocation()
    
    const flickityOption = {
        initialIndex: 2
    }

    const cars = [
    {
        id: [1],
        image: [hum],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [2],
        image: [hum2],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [3],
        image: [hum3],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [4],
        image: [hum4],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [5],
        image: [hum5],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [6],
        image: [hum],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [7],
        image: [hum2],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'], 
    },
    {
        id: [8],
        image: [hum3],
        title: ['Киселе Василий'],
        star:[1,1,1,1,0],
        text:['Отличная компания, всем советую, пользуюсь услугами второй раз. Смогли купить авто с автоаукционна Японии очень быстро. Большое спасибо'],
        date:['7 октября 2023г.'],  
    },
    
    ]

    //валидация форм
    const [nameDirty, setNameDirty] = useState(false)
    const [nameError, setNameError] = useState("Не может быть пустым")


    const [formValid, setFormValid] = useState(false)
   

    useEffect(()=> {
       
         
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray", padding: "20px", margin: "0 100px 0 0", zIndex:"10" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray", padding: "20px", margin: "0 0 0 100px", zIndex:"10" }}
            onClick={onClick}
          />
        );
      }

    //setting slider
    const settings = {
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-1000px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        slidesPerRow: 2
        
      };
   

    // const handleChange = ({ target: {value, }}) =>{
    //     setValues({...values, [Name_title]: value})
    //     if(values[Name_title].length < 0){
    //         setNameError("Некоректные данные")
    //     } else {
    //         setNameError("")
    //     }
    // }



    // const addStart = () =>{
    //     socket.emit('add', { values })
    //     location.reload();
    // }
    
    
    
    
    
    
    
    return (
        <div className={styles.wrap}>
            <div className="header">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.header_menu}>
                        <div className={styles.logo}>
                            <div className={styles.logo_svg}></div> 
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.menu_blocs}>
                                <ul>
                                    <li><a href="#home">Авто из Японии</a></li>
                                    <li><a href="#news">Авто из Китая</a></li>
                                    <li><a href="#contact">Авто из Кореи</a></li>
                                
                                  
                                    <div className={styles.dropdown}>
                                        <button className={styles.dropbtn}>О нас <div className={styles.strelaDown}></div> 
                                              
                                        </button>
                                        <div className={styles.dropdown_content}>
                                            <a href="#">Компания</a>
                                            <a href="#">Отзывы</a>
                                            <a href="#">Контакты</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.block_right}>
                            <div className={styles.flex}>
                                <div className={styles.bloks_link}>
                                    <div className={styles.watsap_svg}></div>
                                    <div className={styles.telega_svg}></div>
                                </div>
                                <div className={styles.bloks_number}>
                                    <a href="+71234567890">+7 123 456 78 90</a>
                                    <span>Звонок по РФ бесплатный</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </div>

            <section>
                <div className={styles.container}>
                    <div className={styles.cars_blok_title}>
                        <div className={styles.title_1_sevtion}>
                            <h2>Авто из японии, Кореи и Китая 
                                с выгодой до 30 % рынка РФ</h2>
                            <p>Высокий сервис для клиентов, от
                                заключения догоора до выдачи/отпраки авто</p>
                            <button>Рассчитать стоимость</button>
                        </div>
                        <div className={styles.png_cars}>
                            <div className={styles.car1_png}></div>
                            <div className={styles.car2_png}></div>
                            <div className={styles.car3_png}></div>
                            <div className={styles.triangle_png}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.cars_viev}>
                        <div className={styles.title_cars_viev}>
                            <div className={styles.title_}>
                                <h2>Автомобили из Японии</h2>
                                <p>Toyota, Honda, Nissan и другие японские автомобили.</p>
                            </div>
                            <div className={styles.all_button}>
                                <a href="#">Смотреть все <div className={styles.right}></div></a>
                            </div>
                        </div>
                        <div className={styles.cars_galeri}>
                            <div className={styles.cars_galeri_line}>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car2}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car3}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car4}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cars_galeri_line}>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car5}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car6}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car7}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.card_car}>
                                    <div className={styles.img_car8}>
                                        
                                    </div>
                                    <div className={styles.title_car}>
                                        <h3>Subaru LEVONG VN5</h3>
                                        <p>2021 • 1.8 л • 4WD • Бензин • Вариатор</p>
                                    </div>
                                    <div className={styles.foter_car}>
                                        <div className={styles.price_car}>
                                            <h4>2 115 600 ₽</h4>
                                        </div>
                                        <div className={styles.button_car}>
                                            <button>Остаить заявку</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.red_button}>
                            <button>Смотреть все</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.title_cars_viev}>
                        <div className={styles.title_}>
                            <h2>Автомобили из Китая и Кореи</h2>
                            <p>Поможем с покупкой автомобиля из Китая и Кореи</p>
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.div_sect_img}></div>
                        <div className={styles.div_sect_img2}></div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.section_o_nas}>
                        <div className={styles.flex_jus}>
                            <div>
                                <h3>О нас</h3>
                                <p>Компания «AUTOCENTER» предлагает 
                                    широкий выбор автомобилей от ведущих
                                     мировых производителей. Мы специализируемся 
                                    на продаже новых и подержанных авто.
                                    Наша команда профессионалов поможет вам выбрать
                                     идеальный автомобиль, учитывая ваши потребности и бюджет.</p>
                            </div>  
                            <div className={styles.logo_svg_white}></div>
                        </div>
                        <div className={styles.mini_icon}>
                            <div className={styles.flex_jes}>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_time}></div>
                                    <p>Короткие сроки доставки</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_time_hum}></div>
                                    <p>Полное сопровождение. Связь с клиентом 24/7</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_diplom}></div>
                                    <p>Опыт работы более 5 лет</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_money}></div>
                                    <p>⁠Привезем авто с выгодой до 30% ниже рынка РФ</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_like}></div>
                                    <p>Высокий сервис для клиентов</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_ruka}></div>
                                    <p>Полная клиентоориентированность</p>
                                </div>
                                <div className={styles.white_back}>
                                    <div className={styles.logo_humans}></div>
                                    <p>⁠Профессионализм сотрудников компании</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.red_button}>
                        <button>Рассчитать стоимость</button>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.title_cars_viev}>
                        <div className={styles.title_}>
                            <h2>Отзывы клиентов <span>253</span></h2>
                            <p className={styles.flex_job}> <span>4,5</span>
                            <div className={styles.div_sect_img_star}></div>
                            <div className={styles.div_sect_img_star}></div>
                            <div className={styles.div_sect_img_star}></div>
                            <div className={styles.div_sect_img_star}></div>
                            <div className={styles.div_sect_img_star_pol}></div>
                            </p>
                        </div>
                    </div>

                    <div>
                    <div>
                        <div className={styles.slider}>
                        <Slider {...settings}>
                            { cars.map((post, index)=>
                                (
                                   
                                    <div key = {index}>
                                        <div className={styles.comment_back}>
                                            <div className={styles.flex}>
                                                <div><img src={post.image} alt="image" /></div>
                                                <div className={styles.comment_info}>
                                                    <h3>{post.title}</h3>
                                                    <div className={styles.flex}>
                                                    { post.star.map((s, index)=>
                                                        <div key = {index}>
                                                            {  s == 1 &&
                                                                <img src={star} alt="image-star" />
                                                            } { s == 0 &&
                                                                <img src={star_pol} alt="image-star" />
                                                            }
                                                            
                                                        </div>
                                                    )}
                                                    </div>
                                                    <h4>{post.text}</h4>
                                                    <p>{post.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                            
                        </Slider>
                        </div>
                    </div>
                    </div>

                </div>
            </section>

            <section>
                <div className={styles.container}>
                    <div className={styles.back_black}>
                        <div className={styles.flex}>
                            <div className={styles.info}>
                                <div className={styles.left_info}>
                                    <h3>Контактная информация</h3>
                                    <p>Оставте свою заявку и наш менеджер свяжется с 
                                        Вами для уточнения деталей</p>
                                </div>
                                <div className={styles.info_contact}>
                                    <div  className={styles.flex}>
                                        <div className={styles.left_zvon}>
                                            <p>Позвонить</p>
                                            <h4>+7990978798</h4>
                                        </div>
                                        <div className={styles.flex}>
                                            <div className={styles.gis2}></div>
                                            <p className={styles.text_info}><a href="#">Мы на 2 гис</a></p>
                                        </div>
                                    </div>
                                    <div  className={styles.flex}>
                                        <div className={styles.left_zvon}>
                                            <p>Написать</p>
                                            <h4>info@example.com</h4>
                                        </div>
                                        <div className={styles.flex}>
                                            <div className={styles.yandex}></div>
                                            <p className={styles.text_info}><a href="#">Мы на Яндекс картах</a></p>
                                        </div>
                                    </div>
                                    <div  className={styles.flex}>
                                        <div className={styles.left_zvon}>
                                            <p>Адрес</p>
                                            <h4>123 Main Street, Tokyo, Japan</h4>
                                        </div>
                                        <div className={styles.flex}>
                                            <div className={styles.lc}></div>
                                            <p className={styles.text_info}><a href="#">VL справочник</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.form}>
                                <div>
                                    <h2>Оставте заявку</h2>
                                </div>
                                <div className={styles.flex}>
                                    <div className={styles.form_name}>
                                        <p>Имя</p>
                                        <input type="text"  
                                        placeholder="Введите имя"/>
                                    </div>
                                    <div className={styles.form_telef}>
                                        <p>Телефон <span>(Обязательно)</span></p>
                                        <input type="number"  
                                        placeholder="+7"/>
                                    </div>
                                </div>
                                <div className={styles.form_area}>
                                    <p>Уточните свой вопрос</p>
                                    <input type="area" 
                                    placeholder="Введите текст сообщения"/>
                                </div>
                                <div className={styles.flex}>
                                    <div className={styles.flex_form}>
                                        <input type="checkbox" name="" id="" />
                                        <p>С <span>правилами политики <br />
                                        конфиденциальности </span>ознакомлен</p>
                                    </div>
                                    <div className={styles.form_but}>
                                        <button>
                                            Отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.black_dor}>
                <div className={styles.container}>
                    <div className={styles.black}>

                    <div className={styles.flex}>
                        <div className={styles.flex}>
                            <div className={styles.logo_svg_white2}></div>
                            <div className={styles.grid}>
                                <a href="#">О нас</a>
                                <a href="#">Каталог авто</a>
                            </div>
                        </div>
                        <div className={styles.flex_avto}>
                            <div className={styles.avto_a}>
                                <h3>Авто из Японии</h3>
                                <div className={styles.block}>
                                    <a href="#">Toyota</a>
                                    <a href="#">Nisssan</a>
                                    <a href="#">Honda</a>
                                    <a href="#">Mazda</a>
                                    <a href="#">Mitsubishi</a>
                                </div>
                                <div>
                                    <a href="#">Subaru</a>
                                    <a href="#">Suzuki</a>
                                    <a href="#">Lexus</a>
                                    <a href="#">BMW</a>
                                    <a href="#">Daihatsu</a>
                                </div>
                            </div>
                            <div className={styles.avto_a}>
                                <h3>Авто из Японии</h3>
                                <div className={styles.block}>
                                    <a href="#">Changan</a>
                                    <a href="#">Exeed</a>
                                    <a href="#">Geely</a>
                                    <a href="#">Chery</a>
                                    <a href="#">Haval</a>
                                </div>
                                <div>
                                    <a href="#">FAW</a>
                                    <a href="#">BYD</a>
                                    <a href="#">JAC</a>
                                    <a href="#">Lifan</a>
                                    <a href="#">DongFeng</a>
                                </div>
                            </div>
                            <div className={styles.avto_a}>
                                <h3>Авто из Кореи</h3>
                                <div className={styles.block}>
                                    <a href="#">Hyundai</a>
                                    <a href="#">Kia</a>
                                    <a href="#">SsangYong</a>
                                </div>
                                <div>
                                    <a href="#">Daewoo</a>
                                    <a href="#">Samsung</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className={styles.block_palka}></div>
                        <div className={styles.flex_foter}>
                            <div className={styles.polit_foter}>
                                <h4>Политика конфиденциальности</h4>
                                <p>2023-2024 ООО "Автоцентр"</p>
                            </div>
                            <div className={styles.flex}>
                                <div className={styles.flex_ico}>
                                    <div className={styles.watsap_fot}></div>
                                    <div className={styles.telega_fot}></div>
                                    <div className={styles.Youtube_fot}></div>
                                </div>
                                <div className={styles.cont_info_fot}>
                                    <h3>+7123 456 78 90</h3>
                                    <p>Звонок по РФ бесплатный</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
    )
    }
  

export default Main