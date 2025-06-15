import {Like} from '../models/index.js';
import {CrudRepoitory} from './index.js';

class LikeRepository extends CrudRepoitory {
    constructor() {
        super(Like);
    }
}

export default LikeRepository;