<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Profile Component</div>

                    <div class="card-body">
                        I'm a Profile component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component Profile mounted.')
        }
    }
</script>
<style scoped>
    body{
        color:red;
    }
</style>
