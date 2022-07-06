<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="所在区域">
      <el-radio-group v-model="form.resource">
        <el-radio label="中国大陆"></el-radio>
        <el-radio label="中国香港"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>

    <el-form-item label="登录密码">
      <el-input v-model="form.pwd"></el-input>
    </el-form-item>
    <el-form-item label="再次输入登录密码">
      <el-input v-model="form.repwd"></el-input>
    </el-form-item>
    <el-form-item label="邀请码(选填)">
      <el-input v-model="form.yqm"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        resource: '',
        email:'',
        pwd:'',
        repwd:'',
        yqm:'',
      },
    };
  },
};
</script>

<style></style>
