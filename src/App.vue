<template>
  <main id="app">
    <section id="tasty">
      <section id="pizza" class="cuisine">
        <h1>披萨</h1>

        <div class="twins group">
          <article class="h-product">
            <h2 class="p-name">激情培根</h2>
            <ul class="spec-tag">
              <li class="p-spec"><span>八寸/<b class="spec-price">¥39</b></li>
              <li class="p-spec isSelected">十寸/<b class="spec-price">¥59</b><span class="qty"> x1</span></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：激情培根披萨" />
              <figcaption class="e-description">
                <p>特色：双层培根，圆菇</p>
              </figcaption>
            </figure>
          </article>
          <article class="h-product">
            <h2 class="p-name">风情夏威夷</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected">八寸/<b class="spec-price">¥39</b><span class="qty"> x1</span></li>
              <li class="p-spec">十寸/<b class="spec-price">¥59</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：风情夏威夷披萨" />
              <figcaption class="e-description">
                <p>特色：培根，菠萝</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="twins group">
          <article class="h-product">
            <h2 class="p-name">内牛满面</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected">八寸/<b class="spec-price">¥46</b><span class="qty"> x2</span></li>
              <li class="p-spec">十寸/<b class="spec-price">¥69</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：内牛满面披萨" />
              <figcaption class="e-description">
                <p>特色：牛肉</p>
              </figcaption>
            </figure>
          </article>
          <article class="h-product">
            <h2 class="p-name">热辣牛肉</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥46</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥69</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：热辣牛肉披萨" />
              <figcaption class="e-description">
                <p>特色：牛肉，自制辣酱</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="twins group">
          <article class="h-product">
            <h2 class="p-name">辣味鸡肉</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥46</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥69</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：辣味鸡肉披萨" />
              <figcaption class="e-description">
                <p>特色：烤鸡肉，辣酱</p>
              </figcaption>
            </figure>
          </article>
          <article class="h-product">
            <h2 class="p-name">菌菇鸡肉</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥46</b></li>
              <li class="p-spec isSelected">十寸/<b class="spec-price">¥69</b><span class="qty"> x1</span></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：菌菇鸡肉披萨" />
              <figcaption class="e-description">
                <p>特色：烤鸡肉，圆菇</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="twins group">
          <article class="h-product">
            <h2 class="p-name">情满金枪鱼</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥58</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥87</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：情满金枪鱼披萨" />
              <figcaption class="e-description">
                <p>特色：金枪鱼，酸黄瓜</p>
              </figcaption>
            </figure>
          </article>
          <article class="h-product">
            <h2 class="p-name">席卷天虾</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥58</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥87</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：席卷天虾披萨" />
              <figcaption class="e-description">
                <p>特色：金枪鱼，虾仁</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="orphan group">
          <article class="h-product">
            <h2 class="p-name">大力水手</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected">八寸/<b class="spec-price">¥35</b><span class="qty"> x1</span></li>
              <li class="p-spec">十寸/<b class="spec-price">¥53</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：大力水手披萨" />
              <figcaption class="e-description">
                <p>特色：菠菜，蘑菇，酸黄瓜</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="orphan group">
          <article class="h-product">
            <h2 class="p-name">缤纷果园</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥39</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥59</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：缤纷果园披萨" />
              <figcaption class="e-description">
                <p>特色：红薯边，菠萝，猕猴桃</p>
              </figcaption>
            </figure>
          </article>
        </div>

        <div class="orphan group">
          <article class="h-product">
            <h2 class="p-name">榴恋榴莲</h2>
            <ul class="spec-tag">
              <li class="p-spec">八寸/<b class="spec-price">¥68</b></li>
              <li class="p-spec">十寸/<b class="spec-price">¥97</b></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/pizza.png" alt="图片：榴恋榴莲披萨" />
              <figcaption class="e-description">
                <p>特色：榴莲</p>
              </figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section id="rice" class="cuisine">
        <h1>焗饭</h1>

        <div class="twins group">
          <article class="h-product">
            <h2 class="p-name">红绘牛肉</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected"><b class="spec-price">¥35</b>/份<span class="qty"> x1</span></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/rice.png" alt="图片：红绘牛肉焗饭" />
              <figcaption class="e-description">
                <p>特色：牛肉，红酒</p>
              </figcaption>
            </figure>
          </article>
          <article class="h-product">
            <h2 class="p-name">咖喱鸡肉</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected"><b class="spec-price">¥35</b>/份<span class="qty"> x1</span></li>
            </ul>
            <figure>
              <img class="u-photo" src="./assets/imgs/rice.png" alt="图片：咖喱鸡肉焗饭" />
              <figcaption class="e-description">
                <p>特色：鸡肉，咖喱</p>
              </figcaption>
            </figure>
          </article>
        </div>  
      </section>

      <section id="snack" class="cuisine">
        <h1>小吃</h1>

        <div class="orphan group">
          <article class="h-product">
            <h2 class="p-name">奥尔良烤翅</h2>
            <img class="u-photo" src="./assets/imgs/chicken-wings.png" alt="图片：奥尔良烤翅" />
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥20</b>/一对</li>
              <li class="p-spec isSelected"><b class="spec-price">¥50</b>/五对<span class="qty"> x1</span></li>
            </ul>
          </article>
        </div>

        <div class="orphan group">
          <article class="h-product">
            <h2 class="p-name">芝士焗土豆泥</h2>
            <img class="u-photo" src="./assets/imgs/rice.png" alt="图片：焗土豆泥" />
            <ul class="spec-tag">
              <li class="p-spec isSelected"><b class="spec-price">¥28</b>/榴莲味<span class="qty"> x2</span></li>
              <li class="p-spec"><b class="spec-price">¥12</b>/金枪鱼味</li>
              <li class="p-spec"><b class="spec-price">¥9</b>/培根味</li>
            </ul>
          </article>
        </div>
      </section>
    </section>

    <section id="drink">
      <section id="coffee" class="cuisine">
        <h1>咖啡</h1>

        <div class="group">
          <article class="h-product">
            <h2 class="p-name">卡布奇诺</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected"><b class="spec-price">¥25</b><span class="qty"> x2</span></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">巧克力摩卡</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥25</b></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">咖啡拿铁</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥25</b></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">美式咖啡</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥18</b></li>
            </ul>
          </article>
        </div>
      </section>

      <section id="black-tea" class="cuisine">
        <h1>红茶</h1>

        <div class="group">
          <article class="h-product">
            <h2 class="p-name">菠萝伯爵茶</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥18</b></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">花香柠檬茶</h2>
            <ul class="spec-tag">
              <li class="p-spec isSelected"><b class="spec-price">¥18</b><span class="qty">x1</span></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">玫瑰红枣茶</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥18</b></li>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">红茶拿铁</h2>
            <ul class="spec-tag">
              <li class="p-spec"><b class="spec-price">¥18</b></li>
            </ul>
          </article>
        </div>
      </section>

      <section id="ice-tea" class="cuisine">
        <h1>气泡水•冰茶</h1>

        <div class="group">
          <article class="h-product">
            <h2 class="p-name">荔枝芦荟</h2>
            <ul class="spec-tag">
              <span><b class="spec-price">¥18/冰茶</b></span>
              <span><b class="spec-price">¥18/气泡水</b></span>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">青柠气泡水</h2>
            <ul class="spec-tag">
              <span><b class="spec-price">¥18/冰茶</b></span>
              <span><b class="spec-price">¥18/气泡水</b></span>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">火龙果</h2>
            <ul class="spec-tag">
              <span><b class="spec-price">¥18/冰茶</b></span>
              <span><b class="spec-price">¥18/气泡水</b></span>
            </ul>
          </article>

          <article class="h-product">
            <h2 class="p-name">清香玫瑰</h2>
            <ul class="spec-tag">
              <span><b class="spec-price">¥18/气泡水</b></span>
            </ul>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>

<script lang="">
  export default {

    data () {
      return {
        msg: 'Hello Vue!'
      }
    }
  }
</script>
