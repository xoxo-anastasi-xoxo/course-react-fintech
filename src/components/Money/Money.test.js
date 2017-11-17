import React from 'react';
import { shallow } from 'enzyme';
import Money from './Money';

describe('Money', () => {
  /*
  * Нужно создать компонент Money
  * Который принимает
  * - value - значение, может быть дробным
  * - currency - тип валюты, "RUB", "EUR", "GBP", "USD"
  * Маска для валют RUB = ₽, EUR = €, GBP = £, USD = $
  * К примеру, мы передаем value = 4000.45, currency = RUB - Получаем <span><span>4000</span><span>,45</span><span>₽</span></span>
  * */


  // Все тесты исправлены в соответствии с новыми условиями
  // Появилась дефолтная валюта, символ неразделимости между валютой и цифрами
  // А также классы у span (Вроде всё)
  describe('Базовые состояния', () => {
    it('Рендерим доллары', () => {
      const component = shallow(<Money value={5000.99} currency='USD' />)

      expect(component.html()).toEqual('<span class="Money"><span>5000</span><span class="Money__smalls">,99</span><span> $</span></span>');
    });
    it('Рендерим Евро', () => {
      const component = shallow(<Money value={600.39} currency='EUR' />)

      expect(component.html()).toEqual('<span class="Money"><span>600</span><span class="Money__smalls">,39</span><span> €</span></span>');
    });
    it('Рендерим Фунты', () => {
      const component = shallow(<Money value={100.69} currency='GBP' />)

      expect(component.html()).toEqual('<span class="Money"><span>100</span><span class="Money__smalls">,69</span><span> £</span></span>');
    });
    it('Рендерим Рубли', () => {
      const component = shallow(<Money value={40.99} currency='RUB' />)

      expect(component.html()).toEqual('<span class="Money"><span>40</span><span class="Money__smalls">,99</span><span> ₽</span></span>');
    });
  });

  describe('Проверка коректности работы отбражения значений', () => {
    it('Нет копеек', () => {
      const component = shallow(<Money value={40} currency='RUB' />)

      expect(component.html()).toEqual('<span class="Money"><span>40</span><span> ₽</span></span>');
    });

    it('Нет валюты', () => {
      const component = shallow(<Money value={5} />)

      expect(component.html()).toEqual('<span class="Money"><span>5</span><span> ₽</span></span>');
    });
  });

  describe('Корректное количество span', () => {
    it('Базовый вид', () => {
      const component = shallow(<Money value={100.69} currency='GBP' />)

      expect(component.find('span').length).toBe(4);
    });

    it('Нет копеек', () => {
      const component = shallow(<Money value={100} currency='GBP' />)

      expect(component.find('span').length).toBe(3);
    });

    it('Нет валюты', () => {
      const component = shallow(<Money value={100} />)

      expect(component.find('span').length).toBe(3);
    })
  });
});
