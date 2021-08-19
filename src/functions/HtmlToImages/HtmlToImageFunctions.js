import html2canvas from 'html2canvas';

let html2png = {
    async $html2canvas (el, options = {}) {
        const { type } = options;
        const canvas = await html2canvas(el, options);
        if (type && type === 'dataURL') { return canvas.toDataURL(); } else {
            console.warn('Vue Html2Canvas Warn: Invalid option type. Use \'dataURL\' instead. Returning canvas.');
            return canvas;
        }
    },
    selectImage(selectedRef) {
        this.prepareImage(selectedRef)
    },
    async prepareImage(selectedRef) {
        const el = selectedRef
        const options = {
            type: 'dataURL'
        }
        this.output = await this.$html2canvas(el, options);
        this.printImage()
    },
    printImage() {
        let data = this.output;
        let w = window.open('about:blank');
        let image = new Image();
        image.src = data;
        setTimeout(function(){
            w.document.write(image.outerHTML);
        }, 0);
    }
}

export default html2png;