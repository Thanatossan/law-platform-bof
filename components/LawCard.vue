<template>
  <div class="card">
    <div class="card-body row align-items-center">
      <div class="col-lg-2 justify-content-center d-flex">
        <img
          :src="`http://103.3.60.239:8000${$props.data.image}`"
          width="100%"
          alt=""
        />
      </div>
      <div class="col-lg-7">
        <div>
          <h1 class="m-0" style="font-size: 25px;">{{ $props.data.title }}</h1>
          <span style="color: #a8a8a8;"
            >เสนอโดย : {{ $props.data.initiatePerson.name.first }}
            {{ $props.data.initiatePerson.name.last }}</span
          >
        </div>
        <div class="w-100">
          <p style="font-size: 18px;">
            {{ $props.data.description }}
          </p>
          <div class="status">
            <span class="badge bg-info"
              >จำนวนคนเข้าเสนอชื่อกฎหมาย : {{ $props.data.voteNumber }} คน</span
            >
            <span
              v-if="$props.option === 'lawOwner'"
              class="badge"
              :class="`bg-${statusColor}`"
              >สถานะ : {{ $props.data.status }}</span
            >
          </div>
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div v-if="$props.option !== 'lawOwner'">
          <button
            v-if="$props.canVote"
            class="btn btn-outline-success"
            @click="vote($props.data._id)"
          >
            เสนอชื่อเข้ากฎหมายนี้
          </button>
        </div>
        <div v-else>
          <button
            v-if="$props.data.status === status.ALLOWED_WAIT_FOR_PUBLISH"
            class="btn btn-success"
          >
            เริ่มเปิดการเสนอชื่อเข้ากฎหมายนี้
          </button>
          <button
            v-if="$props.data.status === status.INITIAL_VOTE_COMPLETE"
            class="btn btn-warning"
          >
            ส่งให้รัฐมภาตรวจสอบ
          </button>
          <div
            v-if="
              $props.status === status.INITIAL_STATUS ||
              $props.status === status.INITIAL_VOTE_COMPLETE
            "
          >
            <button class="btn btn-primary">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <button class="btn btn-light inspect">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['data', 'option'],
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
    statusColor() {
      const c = this.$props.data.status
      if (
        c === this.status.INITIAL_STATUS ||
        c === this.status.WAITING_FOR_ALLOW ||
        c === this.status.WAITING_FOR_COMPLETION
      ) {
        return 'warning'
      } else if (
        c === this.status.INITIAL_VOTE_COMPLETE ||
        c === this.status.ALLOWED_WAIT_FOR_PUBLISH ||
        c === this.status.VOTE_COMPLETE ||
        c === this.status.COMPLETE
      ) {
        return 'success'
      } else if (c === this.status.REJECTED_INITIAL) {
        return 'danger'
      } else {
        return 'primary'
      }
    },
  },
  methods: {
    ...mapActions({
      vote: 'law/voteConfirm',
    }),
  },
}
</script>
<style lang="scss" scoped>
button {
  margin: 5px;
}
.inspect {
  display: none;
}
.card {
  cursor: pointer;
  margin: 10px;
  border-radius: 8px;
  transition: 0.2s;
}
.card:hover {
  box-shadow: 2px 2px 5px #00000050;
  .inspect {
    display: inline;
  }
}
.badge {
  font-size: 1rem;
}
</style>
