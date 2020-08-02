<template>
  <div>
    <table class="table">
      <thead>
        <th>ชื่อ</th>
        <th>นามสกลุ</th>
        <th>อายุ</th>
        <th>เลขประขำตัวประชาชน</th>
        <th style="width: 500px !important;">ที่อยู่</th>
      </thead>
      <tbody>
        <tr v-for="person in law.personInitiate" :key="person._id">
          <td>
            {{ person.name.first }}
          </td>
          <td>
            {{ person.name.last }}
          </td>
          <td>
            {{ person.age }}
          </td>
          <td>
            {{ person.idCardNumber }}
          </td>
          <td style="width: 500px !important;">
            บ้านเลขที่ {{ person.address.houseNumber }} หมู่
            {{ person.address.mu }} ซอย {{ person.address.soi }} ตำบล
            {{ person.address.tumbol }} อำเภอ
            {{ person.address.aumper }} จังหวัด
            {{ person.address.province }} รหัสไปรษณีย์
            {{ person.address.postalcode }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['law'],
  created() {
    console.log(this.$props.law)
  },
}
</script>
