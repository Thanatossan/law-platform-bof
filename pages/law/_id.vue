<template>
  <div class="p-4">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              รายชื่อผู้เข้าชื่อเสนอกฎหมาย
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead>
                <th>ลำดับที่</th>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>เลขบัตร ปชช</th>
                <th>ที่อยู่</th>
              </thead>
              <tbody>
                <tr v-for="(p, i) in law.data.personVoted" :key="p._id">
                  <td>
                    {{ i + 1 }}
                  </td>
                  <td>{{ p.name.first }}</td>
                  <td>{{ p.name.last }}</td>
                  <td>{{ p.idCardNumber }}</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              รายชื่อผู้ริเริ่ม
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead>
                <th>ลำดับที่</th>
                <th>ชื่อ</th>
                <th>นามสกุล</th>
                <th>เลขบัตร ปชช</th>
                <th>ที่อยู่</th>
              </thead>
              <tbody>
                <tr v-for="(p, i) in law.data.personInitiate" :key="p._id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ p.name.first }}</td>
                  <td>{{ p.name.last }}</td>
                  <td>{{ p.idCardNumber }}</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading" class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-if="!loading && !showAlert" class="row">
      <div class="col-lg-3">
        <h3>
          {{ law.data.law.title }}
        </h3>
        <h4>
          {{
            law.data.law.alreadyInitiated
              ? '(กฎหมายที่คุณริเริ่มหรือร่วมริเริ่ม)'
              : ''
          }}
        </h4>
        <span style="color: rgb(192, 192, 192);">
          วันที่เข้าชื่อเสนอ
          {{
            new Date(law.data.law.createdDate).toLocaleDateString('th-TH', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })
          }}
          {{ createdYear }}
        </span>
        <h5>ประเภท : {{ law.data.law.type }}</h5>
        <h6>
          ผู้ริเริ่ม : {{ law.data.law.initiatePerson.name.first }}
          {{ law.data.law.initiatePerson.name.last }}
        </h6>
        <button
          class="btn btn-dark m-1"
          data-toggle="modal"
          data-target="#exampleModal1"
        >
          รายชื่อผู้ริเริ่มทั้งหมด
        </button>
        <button
          type="button"
          class="btn btn-sm btn-info m-1"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          จำนวนคนเข้าชื่อเสนอ : {{ law.data.law.voteNumber }} คน
        </button>

        <!-- <img
          :src="`http://3.137.208.125/api${law.image}`"
          class="center mt-3"
          style="width: 100%;"
        /> -->
      </div>
      <div class="col-lg-6" style="overflow: auto; height: 80vh;">
        <LawPaper>
          <div class="text-center">
            <p>บันทึกหลักการและเหตุล</p>
            <p>ประกอบร่างพระราชบัญญัติ{{ law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <hr />

            <div class="text-left">
              <p>หลักการ</p>
              <p>
                {{ law.data.law.principle }}
              </p>
              <p>เหตุผล</p>
              <p>
                {{ law.data.law.reason }}
              </p>
            </div>
          </div>
        </LawPaper>
        <LawPaper>
          <div class="text-center">
            <p>ร่าง</p>
            <p>พระราชบัญญัติ{{ law.data.law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <div class="text-left">
              <p>
                {{ law.data.law.description }}
              </p>
              <p v-for="(sec, i) in law.data.law.section" :key="i">
                <span style="font-family: Sarabun-bold;"
                  >หมวดที่ {{ i + 1 }}
                </span>
                <span>{{ sec.split(`หมวดที่ ${i + 1} `)[1] }}</span>
              </p>
            </div>
          </div>
        </LawPaper>
        <LawPaper>
          <div class="text-center">
            <p>บันทึกวิเคาระห์สรุปสาระสำคัญ</p>
            <p>ของร่างพระราชบัญญัติ{{ law.data.law.title }}</p>
            <p>
              {{ createdYear }}
            </p>
            <div class="text-left">
              {{ law.data.law.conslusion }}
            </div>
          </div>
        </LawPaper>
      </div>

      <!--  -->

      <!--  -->
    </div>
    <div v-if="!loading && showAlert" class="alert alert-danger" role="alert">
      ไม่มีกฎหมายที่ท่านค้นหา
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      law: '',
      createdYear: '',
      loading: true,
      showAlert: false,
    }
  },
  async created() {
    console.log(this.$route.query.invite)
    try {
      this.law = await this.$axios.$get(`/laws/${this.$route.params.id}`)
      this.createdYear = new Date(
        this.law.data.law.createdDate
      ).toLocaleDateString('th-TH', {
        year: 'numeric',
      })
      console.log(this.law)
      console.log(this.$route.params.id)
      this.loading = false
    } catch {
      this.showAlert = true
      this.loading = false
    }
  },
}
</script>
