'use strict';
import stageData    from '../../data/stageData.js';
import render       from '../../page/render.js';
import tasks        from '../tasks.js';

tasks.register('border-radius', {
    html : `<div class="edit-group">
                <div class="row">
                    <div class="col-md-4">
                        圆角
                    </div>
                    <div class="col-md-8">
                        <input type="number" min="0" class="form-control" data-role="border-radius">
                    </div>
                </div>
            </div>`,
    target: '#stylePanel',
    init(){
        this.$radius = this.$el.find('[data-role="border-radius"]');
    },
    bind(){
        this.$radius.on('change.property', function(){
            stageData.curElem.child.style['border-radius'] = this.value + 'px';
            render.logElemStep();
        });
    },
    callback(value){
        this.$el.show();
        value = parseInt(value, 10);
        this.$radius.val(value);
    }
});
