---
"title": "CZON Statik Sitesini GitHub Pages'e Dağıtma Kılavuzu"
"summary": "Bu makale, CZON tarafından oluşturulan çok dilli statik bir siteyi GitHub CLI aracılığıyla GitHub Pages'e nasıl dağıtacağınızı ayrıntılı olarak açıklar. Öncelikle GitHub CLI'yi yükleyip oturum açmanız ve repo iznine sahip olduğunuzdan emin olmanız gerekir. Ardından `npx czon@latest config github` komutunu çalıştırın. Bu komut, kullanıcıyı bir dizi adım boyunca yönlendirecektir: izinleri kontrol etme, Git deposunu başlatma, uzak depoyu yapılandırma, GitHub Pages'i etkinleştirip workflow türü olarak ayarlama, Workflow dosyasını oluşturma veya güncelleme, değişiklikleri kaydedip uzak depoya gönderme ve son olarak Pages URL'sini alma. Tüm süreç otomatiktir ve dağıtım işlemini basitleştirir."
"tags":
  - "GitHub Pages"
  - "CZON"
  - "Statik Site"
  - "Dağıtım Kılavuzu"
  - "GitHub CLI"
  - "Çok Dilli"
  - "Otomatik Dağıtım"
---

# GitHub Pages'e Dağıtma

Bu kılavuz, CZON tarafından oluşturulan çok dilli statik bir siteyi GitHub CLI aracılığıyla GitHub Pages'e nasıl dağıtacağınızı açıklar.

Öncelikle [GitHub CLI](https://cli.github.com/) aracını yükleyin (henüz yüklü değilse) ve oturum açtığınızdan emin olun (henüz açmadıysanız):

```bash
$ gh --version # Sürümü kontrol edin, başarıyla yüklendiğinden emin olun
```

Oturum açtığınızdan ve hedef depoya `repo` erişim izniniz olduğundan emin olun:

```bash
$ gh auth login -s repo # GitHub hesabınızda oturum açın, tarayıcıyla giriş veya token kullanımı için yönlendirileceksiniz
$ gh auth status # Oturum durumunu kontrol edin, başarıyla giriş yaptığınızdan ve hedef depoya repo izniniz olduğundan emin olun
```

Geri kalan her şey için aşağıdaki komutu çalıştırmanız ve istemleri takip etmeniz yeterlidir:

```bash
$ npx czon@latest config github
```

Bu komut sizi aşağıdaki adımlar boyunca yönlendirecektir:

1.  gh'ın izinlerinin `repo` içerip içermediğini kontrol eder. Yoksa, yeniden oturum açmanızı ve `repo` iznini eklemenizi ister.
2.  Yerel dizin bir Git deposu değilse, yeni bir Git deposu başlatmanızı ister.
3.  Yerel dizinin uzak Git deposu ayarlarını kontrol eder, bir GitHub uzak deposu olup olmadığına bakar. GitHub uzak deposu yoksa, yeni bir uzak depo oluşturmanızı ve bunu uzak `origin` olarak eklemenizi ister. Eğer `origin` zaten varsa ancak bir GitHub deposu değilse, yeni bir GitHub uzak deposunu `upstream` olarak eklemenizi ister.
4.  GitHub Pages'in etkin olup olmadığını ve `workflow` türünde olup olmadığını kontrol eder. Değilse, API `gh api` aracılığıyla etkinleştirir ve Actions'tan dağıtılacak şekilde düzeltir. Ayrıca CNAME'i ayarlar (özel bir alan adınız varsa).
5.  GitHub Workflow dosyasını kontrol eder. Oluşturulmamışsa, Pages Workflow dosyasını oluşturur; zaten varsa ancak en son sürüm değilse, Workflow dosyasını güncellemek isteyip istemediğinizi sorar.
6.  Workflow dosyasını kaydeder ve değişiklikleri uzak depoya gönderir.
7.  GitHub Pages web sitesinin URL'sine erişmenizi sağlar, `gh api` aracılığıyla en güncel Pages URL'sini alır.