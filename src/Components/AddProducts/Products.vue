<template>
    <div class="container">
        <h2>Agregar Producto</h2>
        <form class="form-horizontal">
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtEmpresa">Empresa:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="txtEmpresa" placeholder="Nombre empresa" name="txtEmpresa">
                </div>
            </div>    
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtTitulo">Titulo del Producto:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="txtTitulo" placeholder="Titulo del producto" name="txtTitulo">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtDescripcion">Descripcion:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="txtDescripcion" placeholder="Descripcion del producto" name="txtDescripcion">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="txtPrecio">Precio Regular:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="txtPrecio" placeholder="0.0" name="txtPrecio">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="imgFile">Imagen del producto</label>
                <div class="col-sm-10">
                    <input type="file" class="form-control" id="imgFile">                
                </div>
            </div>

             <div class="form-group">
                <label for="selMoney" class="control-label col-sm-2">Moneda:</label>
                <div class="col-sm-10">
                    <select class="form-control" id="selMoney">
                        <option v-for="option in moneyData" v-bind:key="option.value" >
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
export default {
    name: "Products",
    data(){
        return {
            moneyData: [
                {
                    value: 'DR',
                    name : 'Dollar'
                },
                {
                    value: 'LB',
                    name: 'Libra'
                }
            ]
        }
    }
}
</script>