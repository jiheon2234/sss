<template>
  <q-page>
    <div class="row window-height">
      <div class="col flex flex-center">
        <q-card flat :style="{ minWidth: '1000px' }">
          <q-card-section>
            <div
              class="text-h1 text-weight-bold text-center flex justify-center items-center"
            >
              <span>별</span>
              <span class="highlight">걸</span>
              <span :style="$q.screen.gt.sm ? { 'margin-right': '1.5rem' } : {}"
                >다</span
              >
              <span>줄</span>
              <span class="highlight">이네</span>
            </div>
            <div class="text-subtitle2 text-grey">와주셔서 감사합니다☺️</div>
          </q-card-section>
          <q-card-section>
            <q-form>
              <div class="q-gutter-y-lg row">
                <q-input
                  filled
                  label="이메일"
                  hint="이메일을 입력해주세요~~"
                ></q-input>
                <q-input
                  filled
                  label="비밀번호"
                  hint="비밀번호를 입력해주세요~~"
                ></q-input>
              </div>
              <q-btn
                label="로그인하기"
                unelevated
                color="primary"
                size="lg"
                class="full-width q-mt-lg"
              />

              <q-btn
                label="회원가입"
                flat
                size="lg"
                class="full-width q-mt-md"
                to="/auth/sign-up"
              />
              <q-btn
                label="대시보드로 이동"
                flat
                size="lg"
                class="full-width q-mt-xs"
                to="/"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.highlight {
  font-size: 1rem;
  color: $primary;
  margin: 0.5rem;

  body.screen--xs &,
  body.screen--sm & {
    display: none;
  }
}
</style>

<route lang="yaml">
name: home-page
meta:
  layout: default
</route>
