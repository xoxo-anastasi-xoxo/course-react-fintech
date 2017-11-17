import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  /*
  * Нужно создать компонент Button
  * Который принимает
  * - type - тип button
  * - children - текст button
  * - onClick - эввент на клик
  * */

  describe('Базовый рендеринг', () => {
    it('Кнопка с текстом', () => {
      const component = shallow(<Button>Кнопка</Button>);
      // Ну раз мы добавили класс, то скорее всего просто забыли исправить тесты:)
      expect(component.html()).toEqual('<button class="Button">Кнопка</button>');
    });

    it('Кнопка с текстом и типов', () => {
      const component = shallow(<Button type='submit'>Кнопка</Button>);

      expect(component.html()).toEqual('<button class="Button" type="submit">Кнопка</button>');
    });
  });

  describe('Вызов события', () => {
    const eventOnCLick = jest.fn();
    const component = shallow(<Button onClick={eventOnCLick}>Кнопка</Button>);

    component.find('button').simulate('click');

    expect(eventOnCLick).toHaveBeenCalled();
  });
});
