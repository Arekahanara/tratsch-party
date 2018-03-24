<template>
  <div>
    <article>
      <header>
        <div class="row align-items-center">
          <div class="col-1">
            <div class="user-img">
              <img src="http://via.placeholder.com/300x300">
            </div>
          </div>
          <div class="col-11">
            <div class="user-name">
              <h5>@Username</h5>
            </div>
          </div>
        </div>
      </header>
      <div class="row">
        <div class="col">
          <div class="media-box" v-if="post.type == 'IMAGE'">
            <img src="http://via.placeholder.com/600x500">
          </div>
        </div>
      </div>
      <div class="row text">
        <div class="col">
          <div class="text-box">
            <p>{{post.content}}</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
  article {
    border: 1px solid #ced4da;
    margin-bottom: 25px;

    header {
      padding: 15px;

      .user-img {
        img {
          border-radius: 50%;
        }
      }
    }

    .text-box {
      padding: 10px 15px;
    }

    img {
      width: 100%;
    }
  }
</style>


<script>
  export default {
    name: 'post',
    props: ['post']
  }
</script>
