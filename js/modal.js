(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-buton]'),
    openBlogModalBtns: document.querySelectorAll('[data-link]'),
    closeModalBtn: document.querySelector('.modal-close'),
    modal: document.querySelector('[data-modal]'),
    list: document.querySelector('.form-list'),
    firstBlog: document.querySelector('.blog-first'),
    secondBlog: document.querySelector('.blog-second'),
    thirdBlog: document.querySelector('.blog-third'),
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      refs.modal.classList.toggle('is-hidden');
      const markup = ` <li>
              <h4 class="form-title" id="contactFooter">Зв'язатися зараз</h4>
            </li>
            <li class="form-item">
              <p class="form-text" id="adress">
                Бізнес-центр Приморський, вул. Велика Арнаутська, 17, Одеса,
                Україна
              </p>
            </li>
            <li class="form-item">
              <p class="form-text">+38 097 111 11 111</p>
            </li>
            <li class="form-item">
              <p class="form-text">lawcompany911@gmail.com</p>
            </li>`;
      refs.list.insertAdjacentHTML('beforeend', markup);
    });
  });

  document.querySelectorAll('.blog-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      let markup = '';
      refs.modal.classList.toggle('is-hidden');
      // В зависимости от индекса или класса элемента выполняем действия
      if (item.classList.contains('blog-first')) {
        console.log('Клик на первой статье');
        markup = `<h3 class="blogPage-title">
        Вибір адвоката — це важливий крок для забезпечення захисту ваших прав і
        інтересів.
      </h3>
      <p class="blogPage-text">
        Ось кілька ключових моментів, на які варто звернути увагу при виборі:
      </p>
 <p class="blogPage-text">
     Спеціалізація: Визначте, в якій галузі права вам потрібна допомога. Адвокати можуть спеціалізуватися на кримінальному, цивільному,
 господарському праві, а також на сімейних справах. Виберіть того, хто має досвід у вашій конкретній справі. 
      </p>
      <p class="blogPage-text">
        Репутація: Досліджуйте репутацію адвоката. Ознайомтеся з відгуками інших клієнтів, дізнайтеся про його успішність у справах, і чи був він коли-небудь піддаваний дисциплінарним санкціям.
      </p>
<p class="blogPage-text">
       Консультація: Багато адвокатів пропонують безкоштовну первинну консультацію. Використайте цю можливість, щоб оцінити, наскільки ви відчуваєте себе комфортно з адвокатом, і чи зрозумілі його пояснення.
      </p>
<p class="blogPage-text">
      Комунікація: Важливо, щоб адвокат був доступний для вас та підтримував з вами регулярний зв'язок. Уточніть, як часто він буде звітувати про хід справи.
      </p>
<p class="blogPage-text">
       Вартість послуг: Запитайте про структуру оплати: фіксована плата, погодинна оплата чи успішна винагорода. Переконайтеся, що ви розумієте всі витрати і що вони відповідають вашим фінансовим можливостям.
      </p>`;
      } else if (item.classList.contains('blog-second')) {
        console.log('Клик на второй статье');
        markup = `<h3 class="blogPage-title">
        Трудовий договір — це основний документ, що регулює відносини між працівником та роботодавцем. Ось основні права і обов'язки, які варто знати:
      </h3>
       <p class="blogPage-text">
        Права працівників: Право на отримання справедливої заробітної плати. Право на безпечні умови праці. Право на відпустки (основну, додаткову, лікарняні). Право на недискримінацію та повагу до особистості.
      </p>
       <p class="blogPage-text">
        Обов'язки працівників: Виконання своїх трудових обов'язків належним чином. Дотримання внутрішнього трудового розпорядку.Підтримка конфіденційності інформації компанії.
      </p>
        <p class="blogPage-text">
        Права роботодавців: Право на контроль за виконанням трудових обов'язків. Право на дисциплінарні заходи в разі порушення трудової дисципліни.
      </p>
       <p class="blogPage-text">
       Обов'язки роботодавців: Забезпечення безпечних умов праці. Виплата заробітної плати вчасно та у повному обсязі. Дотримання законодавства щодо зайнятості та трудових відносин.
      </p>
 <p class="blogPage-text">
       Для складання трудового договору важливо врахувати інтереси обох сторін, включаючи деталі щодо заробітної плати, умов праці, прав і обов'язків.
      </p>`;
      } else if (item.classList.contains('blog-third')) {
        console.log('Клик на третьей статье');
        markup = `<h3 class="blogPage-title">
        Сімейні спори можуть бути складними і емоційно виснажливими. Ось кілька практичних порад щодо захисту ваших прав:
      </h3>
 <p class="blogPage-text">
      Збереження документів: Зберігайте всі важливі документи, пов'язані з вашим шлюбом, такими як свідоцтво про шлюб, документи про майно, фінансові звіти та будь-які інші важливі документи.
      </p>
<p class="blogPage-text">
      Юридична консультація: Зверніться до юриста, який спеціалізується на сімейному праві. Він допоможе вам зрозуміти ваші права та обов'язки, а також роз'яснить можливі наслідки ваших рішень.
      </p>
<p class="blogPage-text">
      Розподіл майна: У разі розлучення важливо зрозуміти, як буде розподілено майно. Ознайомтеся з законами щодо поділу спільного майна і підготуйтеся до можливих переговорів.
      </p>
<p class="blogPage-text">
      Права дітей: Якщо у вас є діти, зосередьтеся на їхніх інтересах. Визначте, як буде організовано спілкування з дитиною, чи буде призначено аліменти, і які умови виховання дітей будуть найкращими для них.
      </p>
<p class="blogPage-text">
      Переговори: Спробуйте вирішити спір мирним шляхом через переговори або медіацію. Це допоможе уникнути судових процесів і зберегти хороші відносини.
      </p>`;
      }
      refs.list.insertAdjacentHTML('beforeend', markup);
    });
  });

  // refs.firstBlog.addEventListener('click', () => {
  //   refs.modal.classList.toggle('is-hidden');
  //   const markup = `<h3 class="blogPage-title">
  //       Вибір адвоката — це важливий крок для забезпечення захисту ваших прав і
  //       інтересів.
  //     </h3>
  //     <p class="blogPage-text">
  //       Ось кілька ключових моментів, на які варто звернути увагу при виборі:
  //       Спеціалізація: Визначте, в якій галузі права вам потрібна допомога.
  //       Адвокати можуть спеціалізуватися на кримінальному, цивільному,
  //       господарському праві, а також на сімейних справах. Виберіть того, хто
  //       має досвід у вашій конкретній справі. Репутація: Досліджуйте репутацію
  //       адвоката. Ознайомтеся з відгуками інших клієнтів, дізнайтеся про його
  //       успішність у справах, і чи був він коли-небудь піддаваний дисциплінарним
  //       санкціям. Консультація: Багато адвокатів пропонують безкоштовну первинну
  //       консультацію. Використайте цю можливість, щоб оцінити, наскільки ви
  //       відчуваєте себе комфортно з адвокатом, і чи зрозумілі його пояснення.
  //       Комунікація: Важливо, щоб адвокат був доступний для вас та підтримував з
  //       вами регулярний зв'язок. Уточніть, як часто він буде звітувати про хід
  //       справи. Вартість послуг: Запитайте про структуру оплати: фіксована
  //       плата, погодинна оплата чи успішна винагорода. Переконайтеся, що ви
  //       розумієте всі витрати і що вони відповідають вашим фінансовим
  //       можливостям.
  //     </p>`;
  //   refs.list.insertAdjacentHTML('beforeend', markup);
  // });

  //   refs.secondBlog.addEventListener('click', () => {
  //     refs.modal.classList.toggle('is-hidden');
  //     const markup = `<h3 class="blogPage-title">
  //         Трудовий договір — це основний документ, що регулює відносини між працівником та роботодавцем. Ось основні права і обов'язки, які варто знати:
  //       </h3>
  //        <p class="blogPage-text">
  //         Права працівників: Право на отримання справедливої заробітної плати. Право на безпечні умови праці. Право на відпустки (основну, додаткову, лікарняні). Право на недискримінацію та повагу до особистості.
  //       </p>
  //        <p class="blogPage-text">
  //         Обов'язки працівників: Виконання своїх трудових обов'язків належним чином. Дотримання внутрішнього трудового розпорядку.Підтримка конфіденційності інформації компанії.
  //       </p>
  //         <p class="blogPage-text">
  //         Права роботодавців: Право на контроль за виконанням трудових обов'язків. Право на дисциплінарні заходи в разі порушення трудової дисципліни.
  //       </p>
  //        <p class="blogPage-text">
  //        Обов'язки роботодавців: Забезпечення безпечних умов праці. Виплата заробітної плати вчасно та у повному обсязі. Дотримання законодавства щодо зайнятості та трудових відносин.
  //       </p>
  //  <p class="blogPage-text">
  //        Для складання трудового договору важливо врахувати інтереси обох сторін, включаючи деталі щодо заробітної плати, умов праці, прав і обов'язків.
  //       </p>`;
  //     refs.list.insertAdjacentHTML('beforeend', markup);
  //   });

  refs.openBlogModalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.toggle('is-hidden');
    refs.list.innerHTML = '';
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
