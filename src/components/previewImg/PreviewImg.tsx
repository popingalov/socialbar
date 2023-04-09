const PreviewImg = (addImg: HTMLElement | null, target: string) => {
  if (!addImg) {
    const firstImg = document.createElement('img');
    firstImg.setAttribute('src', `${target}`);
    firstImg.setAttribute('id', 'old');
    firstImg.setAttribute('alt', 'preview');
    document.getElementById('preview-photo')?.appendChild(firstImg);
  } else {
    const previewImg = document.createElement('img');
    previewImg.setAttribute('src', `${target}`);
    previewImg.setAttribute('id', 'old');
    previewImg.setAttribute('alt', 'preview');
    document.getElementById('preview-photo')?.replaceChild(previewImg, addImg);
  }
};
export default PreviewImg;
