<template>
  <div class="py-4 container-fluid">
    <div class="form-group">
      <div class="alert alert-danger text-white" role="alert">
        Add, Edit, Delete features are not functional. This is a PRO feature!
        Click <a style="text-decoration: underline" href="https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro-laravel">here</a> to see the PRO product.
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
          <div class="pb-0 card-header">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">Users List</h5>
              </div>
              <div class="my-auto mt-4 ms-auto mt-lg-0">
                <div class="my-auto ms-auto">
                  <a @click="alert" class="mb-0 btn bg-gradient-success btn-sm"
                    >+&nbsp; New User</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="users-list" ref="usersList" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody class="text-sm">
                  <tr>
                    <td>Admin</td>
                    <td>admin@jsonapi.com</td>
                    <td>2023-01-16</td>
                    <td>
                      <a
                        @click="alert"
                        id="1"
                        class="actionButton cursor-pointer me-3"
                        data-bs-toggle="tooltip"
                        title="Edit User"
                      >
                        <i class="fas fa-user-edit text-secondary"></i> </a
                      ><a
                        @click="alert"
                        id="2"
                        class="actionButton deleteButton cursor-pointer"
                        data-bs-toggle="tooltip"
                        title="Delete User"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="d-flex justify-content-center justify-content-sm-between flex-wrap"
            style="padding: 24px 24px 0px"
          >
            <div>
              <p>Showing 1 to 1 of 1 entries</p>
            </div>
            <ul class="pagination pagination-success pagination-md">
              <li class="page-item prev-page disabled">
                <a class="page-link" aria-label="Previous">
                  <span aria-hidden="true"
                    ><i class="fa fa-angle-left" aria-hidden="true"></i
                  ></span>
                </a>
              </li>
              <li class="page-item disabled active">
                <a class="page-link" style="color: white">1</a>
              </li>
              <li class="page-item next-page disabled">
                <a class="page-link" aria-label="Next">
                  <span aria-hidden="true"
                    ><i class="fa fa-angle-right" aria-hidden="true"></i
                  ></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showSwal from "/src/mixins/showSwal.js";

export default {
  name: "Users",
  components: {
    //BasePagination,
  },
  data() {
    return {};
  },

  async mounted() {},

  methods: {
    alert() {
      showSwal.methods.showSwal({
        type: "error",
        message: "This is a PRO feature.",
        width: 400,
      });
    },
  },
};
</script>
<style>
td {
  padding: 12px 24px !important;
}
</style>
