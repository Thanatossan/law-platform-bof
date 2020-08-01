<template>
  <div class="container">
    <div class="row mt-3 mb-3">
      <div class="col-2">
        <h4>กฎหมายที่ได้รับมา</h4>
      </div>
      <div class="col-2">
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
      </div>
    </div>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">ลำดับ</th>
          <th scope="col" style="width: 30%;">ชื่อร่างกฎหมาย</th>
          <th scope="col" style="width: 20%;">สถานะ</th>
          <th scope="col" style="width: 10%;">ประเภท</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>คืนความยุติธรรมให้พี่เตี้ย มช.</td>
          <td>
            <p>
              <span class="badge badge-secondary bg-gray">
                กำลังรอการอนุมัติ</span
              >
            </p>
          </td>
          <td>การศึกษา</td>
          <td>
            <button class="btn btn-primary">Inspect</button>
            <button class="btn btn-success">Accept</button>
            <button class="btn btn-danger">
              Decline
            </button>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary btn-warning">
                <i class="far fa-edit"></i>
              </button>
              <button type="button" class="btn btn-secondary btn-danger">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>คืนความยุติธรรมให้พี่เตี้ย มช.</td>
          <td>
            <p>
              <span class="badge badge-secondary bg-gray">
                กำลังรอการอนุมัติ</span
              >
            </p>
          </td>
          <td>การศึกษา</td>
          <td>
            <button class="btn btn-primary">Inspect</button>
            <button class="btn btn-success">Accept</button>
            <button class="btn btn-danger">
              Decline
            </button>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary btn-warning">
                <i class="far fa-edit"></i>
              </button>
              <button type="button" class="btn btn-secondary btn-danger">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>คืนความยุติธรรมให้พี่เตี้ย มช.</td>
          <td>
            <p>
              <span class="badge badge-secondary bg-gray">
                กำลังรอการอนุมัติ</span
              >
            </p>
          </td>
          <td>การศึกษา</td>
          <td>
            <button class="btn btn-primary">Inspect</button>
            <button class="btn btn-success">Accept</button>
            <button class="btn btn-danger">
              Decline
            </button>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary btn-warning">
                <i class="far fa-edit"></i>
              </button>
              <button type="button" class="btn btn-secondary btn-danger">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
