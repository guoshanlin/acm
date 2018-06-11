<style>
  .ueditor div{line-height: 20px}
</style>
<template>
    <div :id="id" class="ueditor"></div>
</template>
<script type="es6">
    import '../../../static/ueditor/ueditor.config'
    import '../../../static//ueditor/ueditor.all'
    import '../../../static//ueditor/lang/zh-cn/zh-cn'
    export default {
        data () {
            return {
                id: 'uEditorId',
                valueUE: this.value,
                editor: ''
            }
        },
        props: {
            value: '',
            config: {},
            name: ''
        },
        watch: {
            value (val, oldVal) {
                this.valueUE = val
                if (val !== null) {
                    // 设置编辑器的内容，可修改编辑器当前的html内容
                    this.editor.setContent(val)
                }
            }
        },
        destroyed () {
            // 删除已经生成的文本编辑框以及移除绑定事件
            UE.delEditor(this.id)
        },
        beforeCreate () {
          this.$nextTick(() => {
                // 保证 this.$el 已经插入文档
                this.editor = UE.getEditor(this.id, this.config)
                this.editor.commands['uploadimg'] = {
                  execCommand: function () {
                    this.execCommand('insertHtml', "<img src='https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_ca79a146.png' />")
                    return true
                  },
                  queryCommandState: function () { }
                }
                // 编辑器准备就绪后会触发该事件
                this.editor.ready(() => {
                    // 设置编辑器的内容，可修改编辑器当前的html内容
                    this.editor.setContent(this.value)
                    // addListener绑定事件
                    // contentChange编辑器内容发生改变时会触发该事件
                    this.editor.addListener('contentChange', () => {
                        // 计算编辑器html内容字符串的长度
                        const wordCount = this.editor.getContentLength(true)
                        // 计算编辑器当前纯文本内容的长度
                        const content = this.editor.getContent()
                        // 得到编辑器的纯文本内容
                        const plainTxt = this.editor.getPlainTxt()
                        // $emit触发当前实例上的事件。附加参数都会传给监听器回调
                        this.$emit('getValue', plainTxt, 'ueditor', this.name) // 内容改变时传值父组件
                        this.$emit('input', {wordCount: wordCount, content: content, plainTxt: plainTxt})
                    })
                    this.$emit('ready', this.editor)
                })
            })
        }
    }
</script>
