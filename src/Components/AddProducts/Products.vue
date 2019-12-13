<template>
    <div class="container">
        <h2>Agregar Producto</h2>
          <p v-if="errors.length" class="alert alert-danger" role="alert">
            <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <form class="form-horizontal" @submit.prevent="checkForm">
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtEmpresa">Empresa:</label>
                <div class="col-sm-10">
                    <input type="text" v-model="product.empresa" class="form-control" id="txtEmpresa" placeholder="Nombre empresa" name="txtEmpresa">
                </div>
            </div>    
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtTitulo">Titulo del Producto:</label>
                <div class="col-sm-10">
                    <input type="text" v-model="product.titulo_producto" class="form-control" id="txtTitulo" placeholder="Titulo del producto" name="txtTitulo">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtDescripcion">Descripcion:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.descripcion" id="txtDescripcion" placeholder="Descripcion del producto" name="txtDescripcion">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtPrecio">Precio Regular:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" v-model="product.precio_regular" id="txtPrecio" placeholder="0.0" name="txtPrecio">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="imgFile">Imagen del producto</label>
                <div class="col-sm-10">
                    <input type="file" @change="processFile($event)" class="form-control" id="imgFile">                
                </div>
            </div>

             <div class="form-group">
                <label for="selMoney" class="control-label col-sm-2">Moneda:</label>
                <div class="col-sm-10">
                    <select class="form-control" id="selMoney" v-model="product.moneda">
                        <option v-for="option in moneyData" v-bind:value="option.value" :key="option.value">
                            {{option.name}}
                        </option>
                    </select>
                </div>
                </div> 
            <div class="form-group">        
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            </div>
        </form>
        <p>{{$data}}</p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Products",
    data(){
        return {
            errors: [],
            moneyData: [],
            product: {
                empresa: null,
                titulo_producto: "",
                descripcion: "",
                precio_regular: "",
                img: "",
                moneda: "DR"
            }
        }
    },
    mounted(){
        axios
        .get('https://private-e68ed0-nelsongp.apiary-mock.com/moneyTyp')
        .then(response => {
            this.moneyData = response.data.moneyData;
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods: {
        processFile(event){
            this.url = event.target.files[0];
        },
        checkForm: function(e){
            if(!this.product.empresa){
                this.errors.push("Nombre de empresa obligatorio");
            }
        }
    }
}
</script>