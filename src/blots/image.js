import Quill from 'quill';

const Embed = Quill.import('blots/embed');

class LoadingImage extends Embed {
  static create(src) {
    const node = super.create();
    if (src === true) return node;

    const image = document.createElement('img');
    image.setAttribute('src', src);
    node.appendChild(image);
    return node;
  }

  static value(domNode) {
    return domNode.querySelector('img')?.getAttribute('src') || '';
  }
}

LoadingImage.blotName = 'imageLoadingBlot';
LoadingImage.className = 'image-uploading';
LoadingImage.tagName = 'span';
Quill.register({ 'formats/imageLoadingBlot': LoadingImage });

export default LoadingImage;
