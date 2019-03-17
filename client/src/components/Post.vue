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
          <div class="col-10">
              <h5 class="username">@<span v-if="post.user">{{post.user.username}}</span><span v-else>Unknown</span></h5>
          </div>
          <div class="col-1">
              <b-dropdown id="ddown1" no-caret variant="link">
                <template slot="button-content">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </template>
                <b-dropdown-item @click="post.remove()">Delete</b-dropdown-item>
              </b-dropdown>
          </div>
        </div>
      </header>
      <div class="row">
        <div class="col">
          <div class="media-box" v-if="post.medias[0]">
            <img :src="post.medias[0].url">
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
      <div class="row">
        <div class="col">
          <div class="comments">
            <div class="first-level"></div>
            <div class="second-level"></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/variables";

  article {
    border: 1px solid $lgrey;
    margin-bottom: 15px;
    background-color: #fff;

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

    .username {
      margin-bottom: 0;
    }
  }
</style>

<script>
export default {
  name: 'post',
  props: ['post']
}
</script>
