import BaseState from './base.state';

export default interface MovieState extends BaseState {
    imageBaseUrl: string,
    imageSizes: string[]
}
