function loadIgFeed() {
  fetch('/api/instagram-feed').then(res => res.json()).then((res) => {
    if (res.err) {
      console.error('Error getting Instagram feed.', res.err)
      return;
    }

    const images = res.images.filter((image) => {
      return !(image.media_url.includes('video'));
    }).slice(0, 16);

    const elPics = document.querySelector('.ig-pics');
    elPics.textContent = '';

    for (const image of images) {
      const elPicContainer = document.createElement('div');
      elPicContainer.className = 'ig-pic-container';

      const elPic = document.createElement('a');
      elPic.className = 'ig-pic';
      elPic.setAttribute('target', '_blank');
      elPic.setAttribute('href', image.permalink);
      elPic.setAttribute('style', `background-image: url(${image.media_url})`);

      elPicContainer.appendChild(elPic);
      elPics.appendChild(elPicContainer);
    }
  }).catch((err) => {
    console.error('Error getting Instagram feed.', err);
  });
}

function getInterestFormData(formType) {
  let data = {};
  const els = document.querySelectorAll(
    `.InterestForm__form[data-form="${formType}"] *[name]`
  );
  els.forEach((el) => {
    data[el.name] = el.value;
  });
  return data;
}

function openInterestForm(formType) {
  document.querySelector('.InterestForm').hidden = false;
  document.querySelector(
    `.InterestForm__form[data-form="${formType}"]`
  ).hidden = false;
}

function closeInterestFormSubforms() {
  document.querySelectorAll(
    `.InterestForm__form, .InterestForm__success`
  ).forEach(el => el.hidden = true);
}

function closeInterestForm() {
  document.querySelector('.InterestForm').hidden = true;
  closeInterestFormSubforms();
}

function submitInterestForm(formType) {
  const elSuccess = document.querySelector('.InterestForm__success');
  const data = {...getInterestFormData(formType), formType};

  fetch(
    '/api/interest-form-message', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(res => res.json()).then((res) => {
    closeInterestFormSubforms();
    elSuccess.hidden = false;
  }).catch((err) => {
    console.error(err);
    alert(
      'Sorry, there was an error submitting the form! ' +
      'Check your internet connection and try again later.'
    );
  });
}

function bindEvents() {
  document.querySelectorAll('[data-click]').forEach((el) => {
    const action = el.getAttribute('data-click');
    el.addEventListener('click', () => {
      // TODO: We could probably add some safety here but it's (1) our own
      // code, (2) only calling basic functions, so we should be good.
      eval(action);
    });
  });
}
