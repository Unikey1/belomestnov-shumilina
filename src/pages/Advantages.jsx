import React from 'react';
import styles from "./Pages.module.css"
import Card from "../components/Card/Card";
import Form from "../components/Form/Form";

function Advantages() {
    return (
      <div>
        <section className={styles.section}>
          <div className={styles.learnMoreCards}>
          <Card title="Зодиакальные кошки" text="Узнайте, как ваш знак Зодиака влияет на характер вашего котика. Может быть, ваш питомец - игривый Лев или загадочный Скорпион?"/>
          <Card title="Совместимость с котами" text="Какие породы кошек подходят вам по гороскопу? Найдите идеального пушистого спутника, который будет с вами на одной волне."/>
          <Card title="Прогноз для хвостатых" text="Что ждет вашего котика в ближайшем будущем? Любимые лакомства, новые игрушки или уютные вечера с хозяином? Узнайте больше!"/>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.formCalc}>
            <Form/>
          </div>       
        </section>
      </div>
    );
  }
export default Advantages; 