"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users, Coffee, Leaf, Globe, Fire, Calendar, Sun, Wheat, Heart, Home, Smile, LampDesk, Star, CalendarCheck } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Golden Sand Coffee"
          navItems={[
            { name: "Menu Kopi", href: "#coffee-menu" },
            { name: "Spesial", href: "#specialties" },
            { name: "Tentang Kami", href: "#about" },
            { name: "Galeri", href: "#gallery" },
            { name: "Hubungi", href: "#contact" }
          ]}
          button={{ text: "Pesan Sekarang", href: "#contact" }}
        />
        <div id="hero" data-section="hero">
          <HeroSplitDoubleCarousel
            title="Nikmati Kopi Terbaik & Hidangan Lezat di Golden Sand Coffee"
            description="Temukan ketenangan dalam setiap tegukan kopi spesial kami, ditemani hidangan pilihan di suasana yang nyaman dan mengundang."
            tag="Rasa Tak Terlupakan"
            tagIcon={Sparkles}
            tagAnimation="slide-up"
            background={{ variant: "canvas-reveal" }}
            buttons={[
              { text: "Lihat Menu", href: "#coffee-menu" },
              { text: "Tentang Kami", href: "#about" },
            ]}
            buttonAnimation="slide-up"
            carouselPosition="right"
            leftCarouselItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/hot-latte-art-coffee-table-filtered-image-processed-vintage_1232-2210.jpg", imageAlt: "Kopi latte art" },
              { imageSrc: "http://img.b2bpic.net/free-photo/some-fresh-delicious-cookies-white-table_114579-22427.jpg", imageAlt: "Aneka kue dan pastry" },
              { imageSrc: "http://img.b2bpic.net/free-photo/closeup-hand-barista-cafe-making-coffee-barista-with-coffee_169016-60217.jpg", imageAlt: "Barista sedang membuat kopi" },
              { imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup-table_23-2148164788.jpg", imageAlt: "Interior kafe yang nyaman di siang hari" },
              { imageSrc: "http://img.b2bpic.net/free-photo/roasted-coffee-beans-burlap-sack_23-2148255077.jpg", imageAlt: "Biji kopi sedang disangrai" }
            ]}
            rightCarouselItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/glass-coke-with-ice-hand-beach_23-2148134661.jpg", imageAlt: "Es kopi di atas meja" },
              { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-plate-with-breakfast_23-2148454807.jpg", imageAlt: "Hidangan sandwich gourmet" },
              { imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-street-cafe-smiling-laughs-drinking-coffee-terrace_1321-3409.jpg", imageAlt: "Eksterior kafe" },
              { imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-yummy-cake-with-lemon-slices-candies-dark-background-biscuit-cake-fruit-citrus-sweet-cookie_140725-110250.jpg", imageAlt: "Piring hidangan penutup yang cantik" }
            ]}
            carouselItemClassName="!aspect-[4/5]"
          />
        </div>
        <div id="coffee-menu" data-section="coffee-menu">
          <MetricCardTwo
            title="Menu Kopi Pilihan Kami"
            description="Jelajahi beragam pilihan kopi premium kami, disiapkan dengan hati-hati untuk setiap selera."
            tag="Spesialisasi Kopi"
            tagIcon={Coffee}
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            metrics={[
              { id: "espresso", value: "IDR 25K", description: "Rasa kaya dan intens" },
              { id: "cappuccino", value: "IDR 30K", description: "Keseimbangan sempurna susu dan espresso" },
              { id: "latte", value: "IDR 30K", description: "Lembut dan creamy, dengan sentuhan seni" },
              { id: "americano", value: "IDR 28K", description: "Kopi hitam yang kuat dan menyegarkan" },
              { id: "flat-white", value: "IDR 32K", description: "Susu mikrovelvet, intensitas kopi sejati" },
              { id: "mocha", value: "IDR 35K", description: "Perpaduan cokelat dan kopi yang memanjakan" },
              { id: "cold-brew", value: "IDR 30K", description: "Ekstraksi dingin yang halus dan menyegarkan" },
              { id: "macchiato", value: "IDR 28K", description: "Espresso dengan sedikit busa susu" }
            ]}
          />
        </div>
        <div id="specialties" data-section="specialties">
          <FeatureBento
            title="Penawaran Spesial Kami"
            description="Kami menyajikan beragam pilihan kopi dan hidangan yang dibuat dengan penuh cinta dan bahan terbaik."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Lihat Semua Menu", href: "#coffee-menu" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Kopi Premium", description: "Biji kopi pilihan dari berbagai daerah, disangrai sempurna untuk pengalaman rasa yang tak tertandingi.", bentoComponent: "marquee", centerIcon: Coffee,
                variant: "text", texts: ["Espresso", "Latte", "Cappuccino", "Filter Coffee", "Cold Brew", "Arabica", "Robusta", "Signature Blends"],
              },
              {
                title: "Hidangan Lezat", description: "Dari sarapan hingga makan malam, menu kami disiapkan segar setiap hari untuk memanjakan lidah Anda.", bentoComponent: "media-stack", items: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/sideview-pasta-with-tomato-sauce-parmesan-cheese-white-bowl_140725-11824.jpg", imageAlt: "Hidangan pasta gourmet" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/breakfast-with-croissant_23-2148130479.jpg", imageAlt: "Piring sarapan dengan omelet" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/vegetarian-salad-with-cherry-tomato-mozzarella-lettuce_2829-18755.jpg", imageAlt: "Mangkuk salad segar" },
                ],
              },
              {
                title: "Suasana Nyaman", description: "Desain interior hangat dan musik menenangkan menciptakan tempat sempurna untuk bersantai atau bekerja.", bentoComponent: "media-stack", items: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-restaurant_23-2150491833.jpg", imageAlt: "Area duduk interior kafe" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/vintage-light-lamp_1203-3090.jpg", imageAlt: "Kafe dengan pencahayaan hangat" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/empty-colorful-wood-chair_1339-5512.jpg", imageAlt: "Meja-meja kayu di kafe" },
                ],
              },
            ]}
          />
        </div>
        <div id="gallery" data-section="gallery">
          <FeatureCardTwentySix
            title="Galeri Golden Sand"
            description="Intip suasana dan kelezatan yang kami tawarkan. Setiap sudut adalah cerita, setiap hidangan adalah seni."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "Lihat Lebih Banyak", href: "#gallery" }]} 
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "Espresso Perfection", description: "Kekuatan dan aroma espresso murni kami.", imageSrc: "http://img.b2bpic.net/free-photo/cup-coffee-with-coffee-crema-coffee-beans-pastel-peach-color-background-creative-layout-breakfast-concept-top-view-flat-lay_166373-1918.jpg", imageAlt: "Secangkir espresso sempurna", buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
              {
                title: "Artisan Latte Art", description: "Seni dalam setiap cangkir.", imageSrc: "http://img.b2bpic.net/free-photo/texture-breakfast-art-caffeine-wooden_1150-1577.jpg", imageAlt: "Latte art yang rumit", buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
              {
                title: "Gourmet Breakfast", description: "Awali hari Anda dengan hidangan lezat.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-table-full-various-types-food_23-2149139478.jpg", imageAlt: "Sarapan lengkap", buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
              {
                title: "Freshly Baked Pastries", description: "Manisnya pilihan pastry kami.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-photo-croissant-with-ham-cheese-wooden-board_613910-18345.jpg", imageAlt: "Croissant dan kopi", buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
              {
                title: "Cozy Corner", description: "Tempat sempurna untuk refleksi.", imageSrc: "http://img.b2bpic.net/free-photo/designer-cafe_1098-16144.jpg", imageAlt: "Seseorang membaca di sudut kafe yang nyaman", buttonIcon: ArrowUpRight,
                buttonHref: "#"
              },
            ]}
          />
        </div>
        <div id="about" data-section="about">
          <FeatureBento
            title="Mengapa Memilih Golden Sand Coffee?"
            description="Komitmen kami untuk memberikan pengalaman kopi dan kuliner terbaik."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            features={[
              {
                title: "Biji Kopi Terbaik", description: "Kami memilih biji kopi berkualitas tinggi dari petani lokal dan internasional.", bentoComponent: "phone", statusIcon: Leaf,
                alertIcon: Coffee,
                alertTitle: "Kualitas Terjamin", alertMessage: "Dipilih dengan cermat", apps: [
                  { name: "Arabica", icon: Leaf },
                  { name: "Robusta", icon: Coffee },
                  { name: "Etiopia", icon: Globe },
                  { name: "Kolombia", icon: Globe },
                  { name: "Indonesia", icon: Globe },
                  { name: "Roasting", icon: Fire },
                  { name: "Freshness", icon: Calendar },
                  { name: "Aroma", icon: Sun },
                ],
              },
              {
                title: "Bahan Segar Lokal", description: "Mendukung petani lokal, memastikan kesegaran dan rasa terbaik di setiap hidangan.", bentoComponent: "reveal-icon", icon: Wheat,
              },
              {
                title: "Koki Berbakat", description: "Tim koki kami menciptakan hidangan inovatif dengan sentuhan klasik.", bentoComponent: "timeline", heading: "Kreativitas Kuliner", subheading: "Setiap Hari", items: [
                  { label: "Pilihan Bahan", detail: "Pagi" },
                  { label: "Persiapan Menu", detail: "Siang" },
                  { label: "Inovasi Rasa", detail: "Sore" },
                ],
                completedLabel: "Sajian"
              },
              {
                title: "Suasana Hangat", description: "Desain interior yang menenangkan, musik pilihan, dan layanan ramah.", bentoComponent: "orbiting-icons", centerIcon: Heart,
                items: [
                  { icon: Home },
                  { icon: Music },
                  { icon: Smile },
                  { icon: LampDesk },
                ],
              },
              {
                title: "Program Loyalitas", description: "Nikmati diskon dan penawaran eksklusif sebagai penghargaan bagi pelanggan setia kami, dengan imbalan yang terus bertambah.", bentoComponent: "line-chart"
              },
            ]}
          />
        </div>
        <TestimonialCardFifteen
          testimonial="Golden Sand Coffee adalah tempat favorit saya! Kopi selalu sempurna, makanannya lezat, dan suasananya sangat nyaman untuk bekerja atau bersantai."
          rating={5}
          author="— Anya Putri, Pelanggan Setia"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/team-young-colleagues-having-meeting-cafe_273609-16254.jpg", alt: "Pelanggan Anya Putri" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Fakta Menarik Golden Sand"
          description="Dedikasi kami untuk memberikan pengalaman yang tak terlupakan."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "1000+", title: "Kopi Tersaji", description: "Cangkir kopi spesial yang telah kami sajikan", icon: Coffee },
            { id: "satisfaction", value: "4.9", title: "Ulasan Bintang 5", description: "Rata-rata rating kepuasan pelanggan kami", icon: Star },
            { id: "years", value: "5+", title: "Tahun Berdiri", description: "Pengalaman kami dalam menyajikan kopi dan hidangan terbaik", icon: CalendarCheck },
          ]}
        />
        <FeatureCardSixteen
          title="Mengapa Golden Sand Coffee?"
          description="Rasakan perbedaan yang kami tawarkan dibanding yang lain."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Kualitas kopi standar, tanpa karakter", "Pilihan menu terbatas dan kurang segar", "Suasana bising dan tidak nyaman", "Layanan pelanggan yang kurang ramah", "Tidak ada inovasi menu baru"],
          }}
          positiveCard={{
            items: [
              "Kopi spesial dengan biji pilihan terbaik", "Menu beragam, segar, dan lezat setiap hari", "Suasana hangat dan desain interior menawan", "Staf yang ramah dan pelayanan cepat", "Selalu ada menu dan promo baru yang menarik"],
          }}
        />
        <TeamCardFive
          title="Tim Golden Sand"
          description="Wajah di balik setiap cangkir kopi sempurna dan hidangan lezat."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          mediaClassName="object-[65%_center]"
          team={[
            { id: "1", name: "Chef Anita Rahman", role: "Kepala Koki", imageSrc: "http://img.b2bpic.net/free-photo/positive-sous-chef-cutting-fresh-herbs-be-used-gourmet-cuisine-dishes-while-looking-camera-gastronomy-expert-wearing-cooking-uniform-while-preparing-garnish-dinner-service_482257-41989.jpg", imageAlt: "Chef Anita Rahman" },
            { id: "2", name: "Rio Santoso", role: "Kepala Barista", imageSrc: "http://img.b2bpic.net/free-photo/male-barista-preparing-coffee-coffee-house_1303-29339.jpg", imageAlt: "Rio Santoso" },
            { id: "3", name: "Maya Dewi", role: "Manajer Cafe", imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-asian-woman-business-owner-glasses-sitting-cafe-with-notebook-smiling-camera_1258-203452.jpg", imageAlt: "Maya Dewi" },
          ]}
        />
        <FaqBase
          title="Pertanyaan Sering Diajukan"
          description="Informasi penting seputar Golden Sand Coffee & Eatery."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Apa jam operasional Golden Sand Coffee?", content: "Kami buka setiap hari dari jam 07:00 pagi hingga 10:00 malam. Kami juga buka pada hari libur nasional." },
            { id: "2", title: "Apakah saya perlu reservasi untuk datang?", content: "Tidak, Anda tidak perlu reservasi untuk kunjungan biasa. Namun, untuk acara khusus atau grup besar, disarankan untuk menghubungi kami terlebih dahulu." },
            { id: "3", title: "Apakah tersedia pilihan menu untuk diet atau alergi tertentu?", content: "Ya, kami memiliki beberapa pilihan menu vegan, vegetarian, dan bebas gluten. Mohon informasikan kepada staf kami mengenai alergi Anda." },
            { id: "4", title: "Apakah tersedia Wi-Fi gratis?", content: "Tentu, kami menyediakan Wi-Fi gratis untuk semua pelanggan. Sangat cocok untuk Anda yang ingin bekerja atau bersantai sambil menikmati kopi." },
            { id: "5", title: "Apakah ada program loyalitas untuk pelanggan?", content: "Ya, kami memiliki program loyalitas 'Golden Rewards'. Dapatkan poin setiap pembelian dan tukarkan dengan diskon atau menu gratis." },
          ]}
        />
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Hubungi Kami"
            title="Siap Menikmati Pengalaman Golden Sand?"
            description="Kunjungi kami, pesan online, atau hubungi kami untuk informasi lebih lanjut. Kami menantikan kehadiran Anda!"
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Kunjungi Kami", href: "https://maps.app.goo.gl/YourLocationHere" },
              { text: "Pesan Lewat WhatsApp", href: "https://wa.me/YourPhoneNumberHere" },
            ]}
            buttonAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <FooterBase
          logoText="Golden Sand Coffee"
          copyrightText="© 2024 Golden Sand Coffee & Eatery"
          columns={[
            {
              title: "Jelajahi", items: [
                { label: "Tentang Kami", href: "#about" },
                { label: "Menu", href: "#coffee-menu" },
                { label: "Galeri", href: "#gallery" },
                { label: "Hubungi", href: "#contact" },
              ],
            },
            {
              title: "Menu Utama", items: [
                { label: "Kopi Spesial", href: "#" },
                { label: "Minuman Non-Kopi", href: "#" },
                { label: "Sarapan & Brunch", href: "#" },
                { label: "Hidangan Utama", href: "#" },
              ],
            },
            {
              title: "Ikuti Kami", items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "TikTok", href: "#" },
                { label: "Google Maps", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
