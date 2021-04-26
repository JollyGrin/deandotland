export default class InstaObject {
    constructor(node) {
        this.shortcode = node.shortcode;
        this.videoUrl = node.video_url;
        this.size = node.dimensions;
        this.displayUrl = node.display_url;
        this.thumbnail = node.thumbnail_resources[4].src
      
    }
}