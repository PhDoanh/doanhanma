import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Không có tiêu đề",
    description: "Không có mô tả được cung cấp",
  },
  components: {
    callout: {
      note: "Ghi chú",
      abstract: "Tóm tắt",
      info: "Thông tin",
      todo: "Việc cần làm",
      tip: "Gợi ý",
      success: "Thành công",
      question: "Câu hỏi",
      warning: "Cảnh báo",
      failure: "Thất bại",
      danger: "Nguy hiểm",
      bug: "Lỗi",
      example: "Ví dụ",
      quote: "Trích dẫn",
    },
    backlinks: {
      title: "Các bài viết liên quan",
      noBacklinksFound: "Không có",
    },
    themeToggle: {
      lightMode: "Ngày",
      darkMode: "Đêm",
    },
    explorer: {
      title: "Khám phá",
    },
    footer: {
      createdWith: "Được tạo bởi",
    },
    graph: {
      title: "Bản Đồ",
    },
    recentNotes: {
      title: "Cập nhật gần đây",
      seeRemainingMore: ({ remaining }) => `Xem thêm ${remaining} →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Bao gồm ${targetSlug}`,
      linkToOriginal: "Liên Kết Gốc",
    },
    search: {
      title: "⌘/Ctrl + K để tìm kiếm",
      searchBarPlaceholder: "#tag - tìm theo thẻ",
    },
    tableOfContents: {
      title: "Tổng quan bài viết",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `đọc ${minutes} phút`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Những bài gần đây",
      lastFewNotes: ({ count }) => `${count} Bài gần đây`,
    },
    error: {
      title: "Không Tìm Thấy",
      notFound: "Trang này được bảo mật hoặc không tồn tại.",
      home: "Trở về trang chủ",
    },
    folderContent: {
      folder: "Thư Mục",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 mục trong thư mục này." : `${count} mục trong thư mục này.`,
    },
    tagContent: {
      tag: "Thẻ",
      tagIndex: "Thẻ Mục Lục",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 mục gắn thẻ này." : `${count} mục gắn thẻ này.`,
      showingFirst: ({ count }) => `Hiển thị trước ${count} thẻ.`,
      totalTags: ({ count }) => `Tìm thấy ${count} thẻ tổng cộng.`,
    },
  },
} as const satisfies Translation
