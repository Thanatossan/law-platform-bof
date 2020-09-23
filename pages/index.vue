<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col">
        <h2>รายชื่อร่างที่รอการตรวจสอบ</h2>
      </div>
      <!-- <div class="col-2">
        <select class="form-select">
          <option selected>โปรดเลือกประเภท</option>
          <option value="1">ทั่วไป</option>
          <option value="2">การเงิน</option>
          <option value="3">พิเศษ</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-select">
          <option selected>โปรดเลือกสถานะ</option>
          <option value="1">โสด</option>
          <option value="2">มีแฟนแล้ว</option>
          <option value="3">เป็นได้แค่เพื่อน!!</option>
        </select>
      </div> -->
    </div>

    <div class="table-responsive">
      <table class="table table-striped">
        <thead class="thead-light">
          <tr>
            <th scope="col">ลำดับ</th>
            <th scope="col" style="width: 30%;">ชื่อร่างกฎหมาย</th>
            <th>ผู้ริเริ่มร่าง</th>
            <th scope="col" style="width: 20%;">สถานะ</th>
            <th scope="col" style="width: 10%;">ประเภท</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(law, i) in myLaws" :key="law._id">
            <th scope="row">{{ i + 1 }}</th>
            <td>{{ law.title }}</td>
            <td>
              {{ law.initiatePerson.name.first }}
              {{ law.initiatePerson.name.last }}
            </td>
            <td>
              <p>
                <span class="badge bg-primary"> {{ law.status }}</span>
              </p>
            </td>
            <td>{{ law.type }}</td>
            <td>
              <button
                class="btn btn-primary"
                @click="$router.push(`/law/${law._id}`)"
              >
                <i class="fas fa-search"></i>
              </button>
              <button
                v-if="law.status === status.WAITING_FOR_ALLOW"
                class="btn btn-success"
                @click="allowLaw(law._id)"
              >
                ยอมรับ
              </button>
              <button
                v-if="law.status === status.WAITING_FOR_COMPLETION"
                class="btn btn-success"
                @click="submitLaw(law._id)"
              >
                อนุมัติกฎหมายนี้
              </button>
              <button class="btn btn-danger" @click="cancelLaw(law._id)">
                ปฏิเสธ
              </button>
              <!-- <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </div> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  middleware: 'auth',
  data() {
    return {
      status: {
        INITIAL_STATUS: 'กำลังริเริ่ม',
        INITIAL_VOTE_COMPLETE: 'ผู้ร่วมริเริ่มครบ',
        WAITING_FOR_ALLOW: 'รอการวินิจฉัย',
        REJECTED_INITIAL: 'ไม่ได้รับการอนุญาติ',
        ALLOWED_WAIT_FOR_PUBLISH: 'อนุญาติแล้ว',
        GATHERING_VOTE: 'รวบรวมจำนวนผู้เข้าชื่อเสนอ',
        VOTE_COMPLETE: 'ผู้เข้าชื่อเสนอครบ',
        WAITING_FOR_COMPLETION: 'รอการอนุมัติ',
        COMPLETE: 'อนุมัติแล้ว',
      },
    }
  },
  computed: {
    ...mapState({
      myLaws: ({ admin }) => admin.myLaws,
    }),
  },
  async created() {
    await this.$store.dispatch('admin/getMyLaws')
  },
  methods: {
    ...mapActions({
      allowLaw: 'admin/allowLaw',
      cancelLaw: 'admin/cancel',
      submitLaw: 'admin/submitLaw',
    }),
  },
}
</script>
